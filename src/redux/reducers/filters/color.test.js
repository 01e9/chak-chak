import ImageStorage from "@/storage/ImageStorage";
import reduceFilterColor from "@/redux/reducers/filters/color";

it('default state', () => {
    const state = reduceFilterColor(undefined, {type: null}, new ImageStorage())
    expect(state).toMatchObject(expect.any(Object));
});