import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
    DragIndicator as DragIndicatorIcon,
    Brush as BrushIcon,
    Crop as CropIcon,
    CloudUpload as CloudUploadIcon
} from '@material-ui/icons';

class Toolbar_ extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        left: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
        onPositionUpdate: PropTypes.func.isRequired
    }

    state = {
        hasCapture: false,
        left: 0,
        top: 0,
        leftShift: 0,
        topShift: 0
    }

    static getDerivedStateFromProps(props, state) {
        if (state.hasCapture) {
            return null;
        } else {
            return {
                left: props.left,
                top: props.top
            }
        }
    }

    static getPointerPosition(event) {
        return {
            left: event.pageX,
            top: event.pageY
        }
    }

    onDown = event => {
        event.target.setPointerCapture(event.pointerId);
    };

    onGotCapture = event => {
        const pointerPosition = this.constructor.getPointerPosition(event);

        this.setState(({left, top}) => ({
            hasCapture: true,
            leftShift: left - pointerPosition.left,
            topShift: top - pointerPosition.top
        }));
    }

    onMove = event => {
        if (!this.state.hasCapture) {
            return;
        }

        const pointerPosition = this.constructor.getPointerPosition(event);

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
            { classes } = this.props,
            { top, left } = this.state;

        return (
            <Paper className={classes.root} style={{top: top + 'px', left: left + 'px'}}>
                <Button
                    className={classes.drag + ' drag-button'}
                    disableRipple

                    onPointerDown={this.onDown}
                    onGotPointerCapture={this.onGotCapture}
                    onPointerMove={this.onMove}
                    onLostPointerCapture={this.onLostCapture}
                >
                    <DragIndicatorIcon />
                </Button>
                <Button><BrushIcon/></Button>
                <Button><CropIcon/></Button>
                <Button><CloudUploadIcon/></Button>
            </Paper>
        )
    }
}

const styles = {
    root: {
        position: 'fixed'
    },
    drag: {
        cursor: 'move'
    }
}

const Toolbar = withStyles(styles)(Toolbar_)

export default Toolbar
