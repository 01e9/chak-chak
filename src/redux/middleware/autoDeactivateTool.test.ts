import configureStore from "redux-mock-store";
import middlewareAutoDeactivateTool from "@/redux/middleware/autoDeactivateTool";
import createReduceRoot from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";
import { actionToolActivate, actionToolDeactivate } from "@/redux/actions/tools";

const mockStore = configureStore([middlewareAutoDeactivateTool])

describe('dispatches deactivate', () => {
    it('on different tool activate', () => {
        const store = mockStore(createReduceRoot(new ImageStorage())(undefined, actionToolActivate('foo')))
        expect(store.getActions()).toHaveLength(0);

        store.dispatch(actionToolActivate('bar'));

        const actions = store.getActions();
        expect(actions).toHaveLength(2);
        expect(actions[0]).toEqual(actionToolDeactivate('foo'));
        expect(actions[1]).toEqual(actionToolActivate('bar'));
    })
})

describe('does nothing', () => {
    it('on same tool activate', () => {
        const store = mockStore(createReduceRoot(new ImageStorage())(undefined, actionToolActivate('foo')))
        expect(store.getActions()).toHaveLength(0);

        store.dispatch(actionToolActivate('foo'));

        const actions = store.getActions();
        expect(actions).toHaveLength(1);
        expect(actions[0]).toEqual(actionToolActivate('foo'));
    })
    it('on no current active tool', () => {
        const store = mockStore(createReduceRoot(new ImageStorage())(undefined, {type: null}))
        expect(store.getActions()).toHaveLength(0);

        store.dispatch(actionToolActivate('foo'));

        const actions = store.getActions();
        expect(actions).toHaveLength(1);
        expect(actions[0]).toEqual(actionToolActivate('foo'));
    })
})
