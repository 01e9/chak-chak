import { IMG_1PX_DATA_URL } from "@/constants/html";
import { imageFromSrc } from "@/utility/image";

it('imageFromSrc', () => {
    const ImageBackup = Image;
    const imageMock = new Image();
    window.Image = jest.fn().mockImplementation(() => imageMock);

    expect(Image).not.toHaveBeenCalled();
    const promise = imageFromSrc(IMG_1PX_DATA_URL);
    expect(Image).toHaveBeenCalled();

    imageMock.onload(new Event("test"));

    window.Image = ImageBackup;

    return expect(promise).resolves.toBeInstanceOf(Image);
})