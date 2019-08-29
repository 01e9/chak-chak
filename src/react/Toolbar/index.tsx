import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { DragIndicator as DragIndicatorIcon } from '@material-ui/icons';
import * as styles from "./styles.scss";

export interface IToolbarProps {
    left: number;
    top: number;
    onPositionUpdate: (left: number, top: number) => void;
    tools: Array<{key: string; Component: React.JSXElementConstructor<{}>}>;
}

interface IState {
    hasCapture: boolean;
    left: number;
    top: number;
    leftShift: number;
    topShift: number;
}

class Toolbar extends React.Component<IToolbarProps, IState> {
    state: IState = {
        hasCapture: false,
        left: 0,
        top: 0,
        leftShift: 0,
        topShift: 0
    }

    static getDerivedStateFromProps(props: IToolbarProps, state: IState) {
        if (state.hasCapture) {
            return null;
        } else {
            return {
                left: props.left,
                top: props.top
            }
        }
    }

    getPointerPosition(event: React.PointerEvent) {
        return {
            left: event.pageX,
            top: event.pageY
        }
    }

    onDown = (event: React.PointerEvent) => {
        // @ts-ignore setPointerCapture is not defined
        event.target.setPointerCapture(event.pointerId);
    }

    onGotCapture = (event: React.PointerEvent) => {
        const pointerPosition = this.getPointerPosition(event);

        this.setState(({left, top}) => ({
            hasCapture: true,
            leftShift: left - pointerPosition.left,
            topShift: top - pointerPosition.top
        }));
    }

    onMove = (event: React.PointerEvent) => {
        event.stopPropagation();
        const pointerPosition = this.getPointerPosition(event);

        this.setState(({leftShift, topShift}) => ({
            left: pointerPosition.left + leftShift,
            top: pointerPosition.top + topShift
        }));
    }

    onLostCapture = () => {
        this.setState({
            hasCapture: false,
            leftShift: 0,
            topShift: 0
        });

        this.props.onPositionUpdate(
            Math.max(0, this.state.left),
            Math.max(0, this.state.top)
        );
    }

    render() {
        const
            { tools } = this.props,
            { top, left, hasCapture } = this.state;

        return (
            <Paper className={styles.root} style={{top: top + 'px', left: left + 'px'}}>
                <Button
                    className={styles.drag + ' drag-button'}
                    disableRipple

                    onPointerDown={this.onDown}
                    onGotPointerCapture={this.onGotCapture}
                    onPointerMove={hasCapture ? this.onMove : undefined}
                    onLostPointerCapture={this.onLostCapture}
                >
                    <DragIndicatorIcon />
                </Button>
                {tools.map(({key, Component}) => <Component key={key} />)}
            </Paper>
        )
    }
}

export default Toolbar;
