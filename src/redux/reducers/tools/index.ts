import reduceToolBrush, { IStateToolsBrush } from "@/redux/reducers/tools/brush";
import reduceToolColor, { IStateToolsColor } from "@/redux/reducers/tools/color";
import { AnyAction } from "redux";
import ImageStorage from "@/storage/ImageStorage";

export interface IStateTools {
    brush: IStateToolsBrush;
    color: IStateToolsColor;
}

export default function reduceTools(
    state: Partial<IStateTools> = {},
    action: AnyAction,
    imageStorage: ImageStorage
): IStateTools {
    return {
        brush: reduceToolBrush(state.brush, action, imageStorage),
        color: reduceToolColor(state.color, action, imageStorage),
    };
}
