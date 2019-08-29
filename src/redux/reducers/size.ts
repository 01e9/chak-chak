import { actionSizeSetAspectRatio } from "@/redux/actions/size";
import { IAction } from "@/redux/utils/actions";

export interface IStateSize {
    aspectRatio: number;
}

const defaultState: IStateSize = {
    aspectRatio: 1,
}

export default function reduceSize(state: IStateSize = defaultState, { type, payload }: IAction) {
    switch (type) {
        case actionSizeSetAspectRatio.type: {
            return {...state, aspectRatio: payload};
        }
        default: return state;
    }
}
