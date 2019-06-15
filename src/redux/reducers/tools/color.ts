import { AnyAction } from "redux";
import ImageStorage from "@/storage/ImageStorage";

export type IStateToolsColor = {};

export default function reduceToolColor(
    state: IStateToolsColor = {},
    action: AnyAction,
    imageStorage: ImageStorage
): IStateToolsColor {
    return state;
}
