import React from 'react'
import PropTypes from 'prop-types'
import { canvasDrawImage } from "@/utility/canvas";
import { withStyles } from '@material-ui/core'

class Canvas_ extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        image: PropTypes.instanceOf(Image).isRequired
    }

    canvasRef = React.createRef()

    componentDidMount() {
        canvasDrawImage(this.canvasRef.current, this.props.image);
    }

    render() {
        const { classes } = this.props;
        return (
            <canvas ref={this.canvasRef} className={classes.root} />
        );
    }
}

const styles = {
    root: {
        display: 'block'
    }
}

const Canvas = withStyles(styles)(Canvas_);

export default Canvas;
