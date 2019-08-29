import * as React from 'react'
import { connect } from 'react-redux'
import Toolbar_, { IToolbarProps } from "@/react/Toolbar";
import { selectToolbarPosition } from "@/redux/selectors/toolbar";
import { actionToolbarPositionSet } from "@/redux/actions/toolbar";
import ToolBrushControl from "@/redux/react/tool/brush/Control";
import { TOOL_NAME_BRUSH } from "@/constants/tools";
import { IState } from "@/redux/reducers";
import { IAction } from "@/redux/utils/actions";
import { Dispatch } from "redux";

const mapStateToProps = (state: IState): Omit<IToolbarProps, "onPositionUpdate"> => {
    const position = selectToolbarPosition(state);

    return {
        left: position.x,
        top: position.y,
        tools: [
            {key: TOOL_NAME_BRUSH, Component: ToolBrushControl}
        ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>): Pick<IToolbarProps, "onPositionUpdate"> => ({
    onPositionUpdate: (x, y) => dispatch(actionToolbarPositionSet({x, y}))
})

const Toolbar = connect(mapStateToProps, mapDispatchToProps)(Toolbar_)

export default Toolbar
