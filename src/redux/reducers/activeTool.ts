import { actionToolActivate, actionToolDeactivate } from "@/redux/actions/tools";
import { IAction } from "@/redux/utils/actions";

export type IStateActiveTool = string | null;

export default function reduceActiveTool(state: IStateActiveTool = null, { type, payload }: IAction) {
    switch (type) {
        case actionToolActivate.type: return payload;
        case actionToolDeactivate.type: return payload === state ? null : state;
        default: return state;
    }
}
