import ImageStorage from "@/storage/ImageStorage";
import { IAction } from "@/redux/utils/actions";

export type IStateToolsBrush = {};

export default function reduceToolBrush(
    state: IStateToolsBrush = {},
    action: IAction,
    imageStorage: ImageStorage
): IStateToolsBrush {
    return state;
}
