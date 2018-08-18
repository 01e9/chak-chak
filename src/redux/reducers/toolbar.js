import { ACTION_TOOLBAR_POSITION_SET } from "@/redux/actions/toolbar";

const defaultState = {
    x: 100,
    y: 100
}

export default function reduceToolbar(state = defaultState, action) {
    switch (action.type) {
        case ACTION_TOOLBAR_POSITION_SET: {
            return {...state, x: action.x, y: action.y};
        }
        default: return state;
    }
}