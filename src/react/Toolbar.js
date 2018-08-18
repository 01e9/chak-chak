import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    DragIndicator as DragIndicatorIcon,
    Brush as BrushIcon,
    Crop as CropIcon,
    CloudUpload as CloudUploadIcon
} from '@material-ui/icons';
import mergeClassNames from 'merge-class-names'

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
        if (!state.hasCapture) {
            return {
                left: props.left,
                top: props.top
            }
        }
    }

    onDown = event => {
        event.target.setPointerCapture(event.pointerId);
    };

    onGotCapture = event => {
        const { pageX: cursorLeft, pageY: cursorTop } = event;

        this.setState(({left, top}) => ({
            hasCapture: true,
            leftShift: left - cursorLeft,
            topShift: top - cursorTop
        }));
    }

    onMove = event => {
        if (!this.state.hasCapture) {
            return;
        }

        const { pageX: left, pageY: top } = event;

        this.setState(({leftShift, topShift}) => ({
            left: left + leftShift,
            top: top + topShift
        }));
    }

    onLostCapture = event => {
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
            { top, left, hasCapture } = this.state,
            tabProps = {
                classes: {root: classes.tab}
            };

        return (
            <Paper
                className={classes.paper}
                style={{top: top + 'px', left: left + 'px'}}
            >
                <Tabs>
                    <Tab
                        classes={{
                            root: mergeClassNames(classes.tab, classes.drag, hasCapture && classes.dragActive)
                        }}
                        icon={<DragIndicatorIcon />}
                        disableRipple

                        onPointerDown={this.onDown}
                        onGotPointerCapture={this.onGotCapture}
                        onPointerMove={this.onMove}
                        onLostPointerCapture={this.onLostCapture}
                    />
                    <Tab {...tabProps} icon={<BrushIcon/>} />
                    <Tab {...tabProps} icon={<CropIcon/>} />
                    <Tab {...tabProps} icon={<CloudUploadIcon/>} />
                </Tabs>
            </Paper>
        )
    }
}

const styles = (theme) => ({
    paper: {
        position: 'fixed',
        display: 'inline-block',
        overflow: 'hidden'
    },
    drag: {
        cursor: 'move'
    },
    dragActive: {
        backgroundColor: theme.palette.grey[200]
    },
    tab: {
        minWidth: '50px'
    }
})

const Toolbar = withStyles(styles)(Toolbar_)

export default Toolbar
