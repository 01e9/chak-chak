export const imageFromSrc = (src: string) => new Promise<InstanceType<typeof Image>>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
})
