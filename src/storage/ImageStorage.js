export default class ImageStorage {
    images = {};
    increment = 0;

    add(image) {
        if (image instanceof Image) {
            const id = '_' + (++this.increment);
            this.images[id] = image;
            return id;
        } else {
            throw new Error("Invalid image");
        }
    }

    set(id, image) {
        if (image instanceof Image) {
            this.images[id] = image;
        } else {
            throw new Error("Invalid image " + id);
        }
    }

    get(id) {
        return this.images[id];
    }

    remove(id) {
        delete this.images[id];
    }
}