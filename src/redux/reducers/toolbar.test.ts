import reduceToolbar from "@/redux/reducers/toolbar";
import { actionToolbarPositionSet } from "@/redux/actions/toolbar";

it('default state', () => {
    const state = reduceToolbar(undefined, {type: null});
    expect(state).toMatchObject({
        x: expect.any(Number),
        y: expect.any(Number),
    })
})
it('set position', () => {
    const state = reduceToolbar(undefined, actionToolbarPositionSet(101, 1001));
    expect(state).toMatchObject({x: 101, y: 1001});
})
