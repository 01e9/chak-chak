import reduceToolBrush from "@/redux/reducers/tools/brush";
import ImageStorage from "@/storage/ImageStorage";

it('default state', () => {
    const state = reduceToolBrush(undefined, {type: "?", payload: null}, new ImageStorage())
    expect(state).toMatchObject(expect.any(Object));
});
