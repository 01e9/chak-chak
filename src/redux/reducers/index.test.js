import createReduceRoot from "@/redux/reducers/index";
import ImageStorage from "@/storage/ImageStorage";

const reduceRoot = createReduceRoot(new ImageStorage())

it('required keys', () => {
    expect(reduceRoot(undefined, {type: null})).toMatchObject({
        mainImage: null,
        toolbar: expect.any(Object),
        tools: expect.any(Object),
    })
})