import { IState } from "@/redux/reducers";
import { IStateActiveTool } from "@/redux/reducers/activeTool";

export function selectActiveTool(state: IState): IStateActiveTool {
    return state.activeTool;
}
