import { actionToolActivate, actionToolDeactivate } from "@/redux/actions/tools";
import { selectActiveTool } from "@/redux/selectors/activeTool";
import { Middleware } from "redux";
import { IAction } from "@/redux/utils/actions";

const middlewareAutoDeactivateTool: Middleware = store => next => (action: IAction) => {
    if (action.type === actionToolActivate.type) {
        const activeTool = selectActiveTool(store.getState());

        if (activeTool && activeTool !== action.payload) {
            store.dispatch(actionToolDeactivate(activeTool))
        }
    }

    next(action)
}

export default middlewareAutoDeactivateTool
