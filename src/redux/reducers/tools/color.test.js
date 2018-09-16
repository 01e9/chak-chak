import ImageStorage from "@/storage/ImageStorage";
import reduceToolColor from "@/redux/reducers/tools/color";

it('default state', () => {
    const state = reduceToolColor(undefined, {type: null}, new ImageStorage())
    expect(state).toMatchObject(expect.any(Object));
});
