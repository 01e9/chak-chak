export const ACTION_MAIN_IMAGE_SET = 'SET_MAIN_IMAGE'

export const actionMainImageSet = (image: HTMLImageElement) => ({
    type: ACTION_MAIN_IMAGE_SET,
    image
});
