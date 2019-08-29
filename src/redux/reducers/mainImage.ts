import { actionMainImageSet } from "@/redux/actions/mainImage";
import ImageStorage from "@/storage/ImageStorage";
import { IAction } from "@/redux/utils/actions";

export type IStateMainImage = string | null;

export default function reduceMainImage(
    state: IStateMainImage = null,
    { type, payload }: IAction,
    imageStorage: ImageStorage
): IStateMainImage {
    switch (type) {
        case actionMainImageSet.type: {
            return imageStorage.add(payload);
        }
        default: return state;
    }
}
