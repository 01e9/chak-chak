import { actionToolbarPositionSet } from "@/redux/actions/toolbar";
import { IAction } from "@/redux/utils/actions";

export interface IStateToolbar {
    x: number;
    y: number;
}

const defaultState: IStateToolbar = {
    x: 100,
    y: 100
}

export default function reduceToolbar(state: IStateToolbar = defaultState, { type, payload }: IAction) {
    switch (type) {
        case actionToolbarPositionSet.type: {
            return {...state, x: payload.x, y: payload.y};
        }
        default: return state;
    }
}
