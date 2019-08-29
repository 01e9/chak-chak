import ToolBrushControl_, { IToolBrushControlProps } from "@/react/tool/brush/Control";
import { connect } from 'react-redux'
import { selectActiveTool } from "@/redux/selectors/activeTool";
import { TOOL_NAME_BRUSH } from "@/constants/tools";
import { actionToolActivate } from "@/redux/actions/tools";
import { IState } from "@/redux/reducers";
import { Dispatch } from "redux";
import { IAction } from "@/redux/utils/actions";

const mapStateToProps = (state: IState): Pick<IToolBrushControlProps, "isActive"> => ({
    isActive: selectActiveTool(state) === TOOL_NAME_BRUSH
})

const mapDispatchToProps = (dispatch: Dispatch<IAction>): Pick<IToolBrushControlProps, "onClick"> => ({
    onClick: () => dispatch(actionToolActivate(TOOL_NAME_BRUSH))
})

const ToolBrushControl = connect(mapStateToProps, mapDispatchToProps)(ToolBrushControl_)

export default ToolBrushControl
