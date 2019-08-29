import reduceActiveTool from "@/redux/reducers/activeTool";
import { actionToolActivate, actionToolDeactivate } from "@/redux/actions/tools";

it('default state', () => {
    const state = reduceActiveTool(undefined, {type: "?", payload: null})
    expect(state).toBe(null);
});
it('activate', () => {
    const state = reduceActiveTool(undefined, actionToolActivate('test'));
    expect(state).toBe('test');
})
describe('deactivate', () => {
    it('current matches deactivated', () => {
        const state = reduceActiveTool('foo', actionToolDeactivate('foo'));
        expect(state).toBe(null);
    })
    it('current not matches deactivated', () => {
        const state = reduceActiveTool('foo', actionToolDeactivate('bar'));
        expect(state).toBe('foo');
    })
})
