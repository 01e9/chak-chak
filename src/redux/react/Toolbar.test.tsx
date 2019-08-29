import * as React from 'react'
import Toolbar from "@/redux/react/Toolbar";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ImageStorage from "@/storage/ImageStorage";
import createReduceRoot from "@/redux/reducers";
import { createMount } from "@material-ui/core/test-utils";
import { actionToolbarPositionSet } from "@/redux/actions/toolbar";
import { IAction } from "@/redux/utils/actions";

const mockStore = configureStore([])

function createMounted(action: IAction) {
    const stateWithToolbarPosition = createReduceRoot(new ImageStorage())(undefined, action)
    const store = mockStore(stateWithToolbarPosition);
    const wrapper = createMount()(
        <Provider store={store}>
            <Toolbar/>
        </Provider>
    )
    return {wrapper, store}
}

it('snapshot', () => {
    const {wrapper} = createMounted(actionToolbarPositionSet({x: 101, y: 102}));
    expect(wrapper.html()).toMatchSnapshot()
})

describe('mapDispatchToProps', () => {
    it('onPositionUpdate', () => {
        const {wrapper, store} = createMounted(actionToolbarPositionSet({x: 0, y: 0}));

        const dragButton = wrapper.find('.drag-button').hostNodes();
        expect(dragButton).toHaveLength(1);

        expect(store.getActions()).toHaveLength(0);

        dragButton.simulate('gotPointerCapture', {pageX: 1, pageY: 2});
        dragButton.simulate('pointerMove', {pageX: 10, pageY: 10});
        dragButton.simulate('lostPointerCapture', {});

        const actions = store.getActions();
        expect(actions).toHaveLength(1);
        expect(actions[0]).toEqual(actionToolbarPositionSet({x: 9, y: 8}));
    })
})
