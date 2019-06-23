import * as React from "react";
import { TOOL_NAME_BRUSH } from "@/constants/tools";
import { connect } from "react-redux";
import { IState } from "@/redux/reducers";

interface IInternalProps {
    activeTool: string;
}

const mapStateToProps = ({ activeTool }: IState) => ({ activeTool });

const render = ({ activeTool }: IInternalProps) => {
    switch (activeTool) {
        case TOOL_NAME_BRUSH: return <div>BRUSH</div>;
        default: return null;
    }
};

export default connect(mapStateToProps)(render);
