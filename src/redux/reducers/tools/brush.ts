import { AnyAction } from "redux";
import ImageStorage from "@/storage/ImageStorage";

export type IStateToolsBrush = {};

export default function reduceToolBrush(
    state: IStateToolsBrush = {},
    action: AnyAction,
    imageStorage: ImageStorage
): IStateToolsBrush {
    return state;
}
