import { IState } from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";

export default function selectMainImage(state: IState, imageStorage: ImageStorage): HTMLImageElement | undefined {
    return state.mainImage ? imageStorage.get(state.mainImage) : undefined;
}
