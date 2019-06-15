import { ACTION_TOOL_ACTIVATE, ACTION_TOOL_DEACTIVATE } from "@/redux/actions/tools";
import { AnyAction } from "redux";

export type IStateActiveTool = string | null;

export default function reduceActiveTool(state: IStateActiveTool = null, action: AnyAction) {
    switch (action.type) {
        case ACTION_TOOL_ACTIVATE: return action.name;
        case ACTION_TOOL_DEACTIVATE: return action.name === state ? null : state;
        default: return state;
    }
}
