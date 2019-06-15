import { ACTION_MAIN_IMAGE_SET } from "@/redux/actions/mainImage";
import ImageStorage from "@/storage/ImageStorage";
import { AnyAction } from "redux";

export type IStateMainImage = string | null;

export default function reduceMainImage(
    state: IStateMainImage = null,
    action: AnyAction,
    imageStorage: ImageStorage
): IStateMainImage {
    switch (action.type) {
        case ACTION_MAIN_IMAGE_SET: {
            return imageStorage.add(action.image);
        }
        default: return state;
    }
}
