import reduceTools from "@/redux/reducers/tools";
import ImageStorage from "@/storage/ImageStorage";

it('required keys', () => {
    const state = reduceTools(undefined, {type: null}, new ImageStorage());
    expect(state).toMatchObject({
        brush: expect.any(Object),
    })
})