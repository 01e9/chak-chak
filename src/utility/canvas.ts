export function canvasGetAspectRatio(canvas: HTMLCanvasElement): number {
    const
        windowPixelRatio = (window.devicePixelRatio || 1),
        context = canvas.getContext('2d'),
        canvasPixelRatio = (
            // @ts-ignore
            context.webkitBackingStorePixelRatio ||
            // @ts-ignore
            context.mozBackingStorePixelRatio ||
            // @ts-ignore
            context.msBackingStorePixelRatio ||
            // @ts-ignore
            context.oBackingStorePixelRatio ||
            // @ts-ignore
            context.backingStorePixelRatio ||
            1
        ),
        aspectRatio = (windowPixelRatio / canvasPixelRatio);

    return aspectRatio;
}

export function canvasDrawImage(canvas: HTMLCanvasElement, image: HTMLImageElement) {
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    const canvasAspectRatio = canvasGetAspectRatio(canvas);
    canvas.style.width = (canvas.width / canvasAspectRatio) + 'px';
    canvas.style.height = (canvas.height / canvasAspectRatio) + 'px';

    const context = canvas.getContext('2d');
    if (context) {
        context.drawImage(image, 0, 0);
    } else {
        throw new Error("Cannot get canvas context");
    }
}
