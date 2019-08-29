import { canvasGetAspectRatio, canvasDrawImage } from "@/utility/canvas";

describe('canvasGetAspectRatio', () => {
    it('valid value', () => {
        const canvas = document.createElement('canvas');
        expect(canvasGetAspectRatio(canvas)).toBeGreaterThanOrEqual(1);
    });
});

it('canvasDrawImage', () => {
    const canvas = document.createElement('canvas');
    expect(canvas).not.toHaveProperty('width');
    const image = new Image(100, 100);
    canvasDrawImage(canvas, image, 1);
    expect(canvas).toHaveProperty('width');
});
