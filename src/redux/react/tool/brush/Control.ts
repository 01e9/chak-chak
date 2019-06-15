import ToolBrushControl_ from "@/react/tool/brush/Control";
import { connect } from 'react-redux'
import { selectActiveTool } from "@/redux/selectors/activeTool";
import { TOOL_NAME_BRUSH } from "@/constants/tools";
import { actionToolActivate } from "@/redux/actions/tools";
import { IState } from "@/redux/reducers";
import { AnyAction, Dispatch } from "redux";

const mapStateToProps = (state: IState) => ({
    isActive: selectActiveTool(state) === TOOL_NAME_BRUSH
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    onClick: () => dispatch(actionToolActivate(TOOL_NAME_BRUSH))
})

const ToolBrushControl = connect(mapStateToProps, mapDispatchToProps)(ToolBrushControl_)

export default ToolBrushControl
