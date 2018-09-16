import { ACTION_TOOL_ACTIVATE, ACTION_TOOL_DEACTIVATE } from "@/redux/actions/tools";

export default function reduceActiveTool(state = null, action) {
    switch (action.type) {
        case ACTION_TOOL_ACTIVATE: return action.name;
        case ACTION_TOOL_DEACTIVATE: return action.name === state ? null : state;
        default: return state;
    }
}