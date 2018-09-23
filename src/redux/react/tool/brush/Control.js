import ToolBrushControl_ from "@/react/tool/brush/Control";
import { connect } from 'react-redux'
import { selectActiveTool } from "@/redux/selectors/activeTool";
import { TOOL_NAME_BRUSH } from "@/constants/tools";

const mapStateToProps = (state, ownProps) => ({
    isActive: selectActiveTool(state) === TOOL_NAME_BRUSH
})

const ToolBrushControl = connect(mapStateToProps, null)(ToolBrushControl_)

export default ToolBrushControl
