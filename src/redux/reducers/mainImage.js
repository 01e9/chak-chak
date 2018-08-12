import { ACTION_MAIN_IMAGE_SET } from "@/redux/actions/mainImage";

export default function reduceMainImage(state = null, action, imageStorage) {
    switch (action.type) {
        case ACTION_MAIN_IMAGE_SET: {
            return imageStorage.add(action.image);
        }
        default: return state;
    }
}