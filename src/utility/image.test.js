import { IMG_1PX_DATA_URL } from "@/constants/html";
import { imageFromSrc } from "@/utility/image";

describe('imageFromSrc', () => {
    it('works', () => {
        return imageFromSrc(IMG_1PX_DATA_URL).then((image) => {
            expect(image).toBeInstanceOf(Image);
        });
    })
})