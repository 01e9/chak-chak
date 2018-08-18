import reduceMainImage from "@/redux/reducers/mainImage";
import reduceToolbar from "@/redux/reducers/toolbar";

export default function createReduceRoot(imageStorage) {
    return (state = {}, action) => ({
        mainImage: reduceMainImage(state.mainImage, action, imageStorage),
        toolbar: reduceToolbar(state.toolbar, action)
    })
}
