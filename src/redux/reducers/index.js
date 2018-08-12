import reduceMainImage from "@/redux/reducers/mainImage";

export default function createReduceRoot(imageStorage) {
    return (state = {}, action) => ({
        mainImage: reduceMainImage(state.mainImage, action, imageStorage)
    })
}
