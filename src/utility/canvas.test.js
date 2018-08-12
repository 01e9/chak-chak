import { canvasGetAspectRatio, canvasDrawImage } from "@/utility/canvas";

describe('canvasGetAspectRatio', () => {
    it('valid value', () => {
        const canvas = document.createElement('canvas');
        expect(canvasGetAspectRatio(canvas)).toBeGreaterThanOrEqual(1);
    });
})

describe('canvasDrawImage', () => {
    it('works', () => {
        const canvas = document.createElement('canvas');
        expect(canvas).not.toHaveProperty('width');
        const image = new Image(100, 100);
        canvasDrawImage(canvas, image);
        expect(canvas).toHaveProperty('width');
    })
})
