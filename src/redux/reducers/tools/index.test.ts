import reduceTools from "@/redux/reducers/tools";
import ImageStorage from "@/storage/ImageStorage";

it('required keys', () => {
    const state = reduceTools(undefined, {type: "?", payload: null}, new ImageStorage());
    expect(state).toMatchObject({
        brush: expect.any(Object),
        color: expect.any(Object),
    })
})
