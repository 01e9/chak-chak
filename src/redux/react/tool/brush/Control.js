import ToolBrushControl_ from "@/react/tool/brush/Control";
import { connect } from 'react-redux'
import { selectActiveTool } from "@/redux/selectors/activeTool";
import { TOOL_NAME_BRUSH } from "@/constants/tools";
import { actionToolActivate } from "@/redux/actions/tools";

const mapStateToProps = (state, ownProps) => ({
    isActive: selectActiveTool(state) === TOOL_NAME_BRUSH
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(actionToolActivate(TOOL_NAME_BRUSH))
})

const ToolBrushControl = connect(mapStateToProps, mapDispatchToProps)(ToolBrushControl_)

export default ToolBrushControl
