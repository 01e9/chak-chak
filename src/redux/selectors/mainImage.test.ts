import ImageStorage from "@/storage/ImageStorage";
import createReduceRoot from "@/redux/reducers";
import selectMainImage from "@/redux/selectors/mainImage";
import { actionMainImageSet } from "@/redux/actions/mainImage";

it('works', () => {
    const image = new Image(100, 100)
    const imageStorage = new ImageStorage()
    const reduceRoot = createReduceRoot(imageStorage)

    const stateWithoutImage = reduceRoot(undefined, {type: null})
    expect(selectMainImage(stateWithoutImage, imageStorage)).toBe(null)

    const stateWithImage = reduceRoot(undefined, actionMainImageSet(image))
    expect(selectMainImage(stateWithImage, imageStorage)).toBe(image)
})
