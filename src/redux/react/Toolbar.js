import * as React from 'react'
import { connect } from 'react-redux'
import Toolbar_ from "@/react/Toolbar";
import { selectToolbarPosition } from "@/redux/selectors/toolbar";
import { actionToolbarPositionSet } from "@/redux/actions/toolbar";
import ToolBrushControl from "@/redux/react/tool/brush/Control";
import { TOOL_NAME_BRUSH } from "@/constants/tools";

const mapStateToProps = (state, ownProps) => {
    const position = selectToolbarPosition(state);

    return {
        left: position.x,
        top: position.y,
        tools: [
            () => <ToolBrushControl key={TOOL_NAME_BRUSH} />
        ]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onPositionUpdate: (left, top) => dispatch(actionToolbarPositionSet(left, top))
})

const Toolbar = connect(mapStateToProps, mapDispatchToProps)(Toolbar_)

export default Toolbar
