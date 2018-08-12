import ImageStorage from './ImageStorage'

describe('add', () => {
    it('valid image', () => {
        const storage = new ImageStorage;
        const image = new Image();
        expect(() => storage.add(image)).not.toThrow();
    })
    it('invalid image', () => {
        const storage = new ImageStorage;
        const image = "data:uri";
        expect(() => storage.add(image)).toThrow();
    })
    it('generates unique id', () => {
        const storage = new ImageStorage;
        const id1 = storage.add(new Image());
        const id2 = storage.add(new Image());
        expect(id1).not.toEqual(id2);
    })
})

describe('set', () => {
    it('valid image', () => {
        const storage = new ImageStorage;
        const id = 'test';
        const image = new Image();
        expect(() => storage.set(id, image)).not.toThrow();
    })
    it('invalid image', () => {
        const storage = new ImageStorage;
        const id = 'test';
        const image = "data:uri";
        expect(() => storage.set(id, image)).toThrow();
    })
    it('existing id', () => {
        const storage = new ImageStorage;
        const id = 'test';
        const image1 = new Image();
        const image2 = new Image();
        storage.set(id, image1);
        expect(() => storage.set(id, image2)).not.toThrow();
    })
})

describe('get', () => {
    it('existing image', () => {
        const storage = new ImageStorage;
        const id = 'test';
        const image = new Image();
        storage.set(id, image);
        expect(storage.get(id)).toBe(image);
    })
    it('unset image', () => {
        const storage = new ImageStorage;
        const id = 'test';
        expect(storage.get(id)).toBe(undefined);
    })
})

describe('remove', () => {
    it('existing image', () => {
        const storage = new ImageStorage;
        const id = 'test';
        const image = new Image();
        storage.set(id, image);
        expect(storage.get(id)).toBe(image);
        storage.remove(id);
        expect(storage.get(id)).toBe(undefined);
    })
    it('unset image', () => {
        const storage = new ImageStorage;
        const id = 'test';
        expect(storage.get(id)).toBe(undefined);
        storage.remove(id);
        expect(storage.get(id)).toBe(undefined);
    })
})
