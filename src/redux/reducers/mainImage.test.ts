import reduceMainImage from "@/redux/reducers/mainImage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import ImageStorage from "@/storage/ImageStorage";

it('default state', () => {
    const imageStorage = new ImageStorage();
    expect(reduceMainImage(undefined, {type: "?", payload: null}, imageStorage)).toBe(null);
})
it('set', () => {
    const image = new Image();
    const imageStorage = new ImageStorage();
    const imageId = reduceMainImage(undefined, actionMainImageSet(image), imageStorage);
    expect(imageId).not.toBe(null);
    if (imageId) {
        expect(imageStorage.get(imageId)).toBe(image);
    }
})
