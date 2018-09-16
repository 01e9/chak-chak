import { ACTION_TOOL_ACTIVATE, actionToolDeactivate } from "@/redux/actions/tools";
import { selectActiveTool } from "@/redux/selectors/activeTool";

const middlewareAutoDeactivateTool = store => next => action => {
    if (action.type === ACTION_TOOL_ACTIVATE) {
        const activeTool = selectActiveTool(store.getState());

        if (activeTool && activeTool !== action.name) {
            store.dispatch(actionToolDeactivate(activeTool))
        }
    }

    next(action)
}

export default middlewareAutoDeactivateTool