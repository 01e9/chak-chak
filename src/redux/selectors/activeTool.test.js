import { selectActiveTool } from "@/redux/selectors/activeTool";
import createReduceRoot from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";
import { actionToolActivate } from "@/redux/actions/tools";

it('works', () => {
    const state = createReduceRoot(new ImageStorage())(undefined, actionToolActivate('test'))
    expect(selectActiveTool(state)).toBe('test');
})