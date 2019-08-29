import createReduceRoot from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";
import { actionToolbarPositionSet } from "@/redux/actions/toolbar";
import { selectToolbarPosition } from "@/redux/selectors/toolbar";

it('works', () => {
    const reduceRoot = createReduceRoot(new ImageStorage());
    const state = reduceRoot(undefined, actionToolbarPositionSet({x: 1, y: 2}));
    expect(selectToolbarPosition(state)).toEqual({x: 1, y: 2});
})
