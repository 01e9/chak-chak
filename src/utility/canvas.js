export function canvasGetAspectRatio(canvas) {
    const
        windowPixelRatio = (window.devicePixelRatio || 1),
        context = canvas.getContext('2d'),
        canvasPixelRatio = (
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1
        ),
        aspectRatio = (windowPixelRatio / canvasPixelRatio);
    return aspectRatio;
}

export function canvasDrawImage(canvas, image) {
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    const canvasAspectRatio = canvasGetAspectRatio(canvas);
    canvas.style.width = (canvas.width / canvasAspectRatio) + 'px';
    canvas.style.height = (canvas.height / canvasAspectRatio) + 'px';
    canvas.getContext('2d').drawImage(image, 0, 0);
}
