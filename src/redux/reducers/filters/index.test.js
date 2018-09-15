import reduceFilters from "@/redux/reducers/filters";
import ImageStorage from "@/storage/ImageStorage";

it('required keys', () => {
    const state = reduceFilters(undefined, {type: null}, new ImageStorage());
    expect(state).toMatchObject({
        color: expect.any(Object),
    })
})