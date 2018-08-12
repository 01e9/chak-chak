import reduceMainImage from "@/redux/reducers/mainImage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import ImageStorage from "@/storage/ImageStorage";

it('default state', () => {
    expect(reduceMainImage(undefined, {type: null})).toBe(null);
})
it('set', () => {
    const image = new Image();
    const imageStorage = new ImageStorage();
    const imageId = reduceMainImage(undefined, actionMainImageSet(image), imageStorage);
    expect(imageStorage.get(imageId)).toBe(image);
})