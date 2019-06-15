import { ACTION_TOOLBAR_POSITION_SET } from "@/redux/actions/toolbar";
import { AnyAction } from "redux";

export interface IStateToolbar {
    x: number;
    y: number;
}

const defaultState: IStateToolbar = {
    x: 100,
    y: 100
}

export default function reduceToolbar(state: IStateToolbar = defaultState, action: AnyAction) {
    switch (action.type) {
        case ACTION_TOOLBAR_POSITION_SET: {
            return {...state, x: action.x, y: action.y};
        }
        default: return state;
    }
}
