import ImageStorage from "@/storage/ImageStorage";
import { IAction } from "@/redux/utils/actions";

export type IStateToolsColor = {};

export default function reduceToolColor(
    state: IStateToolsColor = {},
    action: IAction,
    imageStorage: ImageStorage
): IStateToolsColor {
    return state;
}
