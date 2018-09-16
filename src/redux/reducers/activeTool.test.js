import reduceActiveTool from "@/redux/reducers/activeTool";
import { actionToolActivate, actionToolDeactivate } from "@/redux/actions/tools";

it('default state', () => {
    const state = reduceActiveTool(undefined, {type: null})
    expect(state).toBe(null);
});
it('activate', () => {
    const state = reduceActiveTool(undefined, actionToolActivate('test'));
    expect(state).toBe('test');
})
it('deactivate', () => {
    const state = reduceActiveTool('foo', actionToolDeactivate('bar'));
    expect(state).toBe(null);
})
