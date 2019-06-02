import { IMG_1PX_DATA_URL } from "@/constants/html";
import { imageFromSrc } from "@/utility/image";

it('imageFromSrc', () => {
    const ImageBackup = Image;
    const imageMock = new Image();
    // @ts-ignore
    window.Image = jest.fn().mockImplementation(() => imageMock);

    expect(Image).not.toHaveBeenCalled();
    const promise = imageFromSrc(IMG_1PX_DATA_URL);
    expect(Image).toHaveBeenCalled();

    imageMock.onload && imageMock.onload(new Event("test"));

    // @ts-ignore
    window.Image = ImageBackup;

    return expect(promise).resolves.toBeInstanceOf(Image);
})
