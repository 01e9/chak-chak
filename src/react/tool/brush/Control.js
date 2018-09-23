import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import BrushIcon from '@material-ui/icons/Brush';

export default class ToolBrushControl extends React.Component {
    static propTypes = {
        isActive: PropTypes.bool,
        onClick: PropTypes.func.isRequired
    }

    render() {
        const { isActive, onClick } = this.props;
        return (
            <Button color={isActive ? "primary" : "default"} onClick={onClick}><BrushIcon/></Button>
        )
    }
}
