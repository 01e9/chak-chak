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

class Toolbar_ extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    render() {
        const { classes } = this.props;
        const tabProps = {
            classes: {root: classes.tab}
        }

        return (
            <Paper className={classes.paper}>
                <Tabs>
                    <Tab icon={<DragIndicatorIcon/>} {...tabProps} />
                    <Tab icon={<BrushIcon/>} {...tabProps} />
                    <Tab icon={<CropIcon/>} {...tabProps} />
                    <Tab icon={<CloudUploadIcon/>} {...tabProps} />
                </Tabs>
            </Paper>
        )
    }
}

const styles = {
    paper: {
        margin: '100px',
        display: 'inline-block'
    },
    tab: {
        minWidth: '50px'
    }
}

const Toolbar = withStyles(styles)(Toolbar_)

export default Toolbar
