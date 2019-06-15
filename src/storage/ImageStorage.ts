export default class ImageStorage {
    images: Record<string, HTMLImageElement> = {};
    increment = 0;

    add(image: HTMLImageElement) {
        if (image instanceof Image) {
            const id = '_' + (++this.increment);
            this.images[id] = image;
            return id;
        } else {
            throw new Error("Invalid image");
        }
    }

    set(id: string, image: HTMLImageElement) {
        if (image instanceof Image) {
            this.images[id] = image;
        } else {
            throw new Error("Invalid image " + id);
        }
    }

    get(id: string) {
        return this.images[id];
    }

    remove(id: string) {
        delete this.images[id];
    }
}
