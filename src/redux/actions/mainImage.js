export const ACTION_MAIN_IMAGE_SET = 'SET_MAIN_IMAGE'

export function actionMainImageSet(image) {
    return {
        type: ACTION_MAIN_IMAGE_SET,
        image
    }
}
