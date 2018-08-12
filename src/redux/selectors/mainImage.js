export default function selectMainImage(state, imageStorage) {
    return imageStorage.get(state.mainImage)
}