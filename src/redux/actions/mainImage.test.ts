import { ACTION_MAIN_IMAGE_SET, actionMainImageSet } from "@/redux/actions/mainImage";

it('actionMainImageSet', () => {
    const image = new Image();
    expect(actionMainImageSet(image)).toEqual({
        type: ACTION_MAIN_IMAGE_SET,
        image
    })
})
