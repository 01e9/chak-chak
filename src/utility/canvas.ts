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

export function canvasDrawImage(canvas: HTMLCanvasElement, image: HTMLImageElement, aspectRatio: number) {
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    canvas.style.width = (canvas.width / aspectRatio) + 'px';
    canvas.style.height = (canvas.height / aspectRatio) + 'px';

    const context = canvas.getContext('2d');
    if (context) {
        context.drawImage(image, 0, 0);
    } else {
        throw new Error("Cannot get canvas context");
    }
}
