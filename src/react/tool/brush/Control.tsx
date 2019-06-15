import * as React from 'react';
import Button from '@material-ui/core/Button';
import BrushIcon from '@material-ui/icons/Brush';

export interface IToolBrushControlProps {
    isActive?: boolean;
    onClick: () => void;
}

export default class ToolBrushControl extends React.Component<IToolBrushControlProps> {
    render() {
        const { isActive, onClick } = this.props;
        return (
            <Button color={isActive ? "primary" : "default"} onClick={onClick}><BrushIcon/></Button>
        )
    }
}
