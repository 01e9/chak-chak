import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

class Editor_ extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        Canvas: PropTypes.func.isRequired,
        Toolbar: PropTypes.func.isRequired,
        ActiveTool: PropTypes.func.isRequired
    }

    render() {
        const { Canvas, Toolbar, ActiveTool, classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.canvasWrap}>
                    <Canvas/>
                    <ActiveTool/>
                </div>
                <Toolbar/>
            </React.Fragment>
        )
    }
}

const styles = {
    canvasWrap: {
        position: 'relative'
    }
}

const Editor = withStyles(styles)(Editor_);

export default Editor;
