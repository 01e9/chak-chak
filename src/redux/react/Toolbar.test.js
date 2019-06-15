import * as React from 'react'
import Toolbar from "@/redux/react/Toolbar";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ImageStorage from "@/storage/ImageStorage";
import createReduceRoot from "@/redux/reducers";
import { createMount } from "@material-ui/core/test-utils";
import { actionToolbarPositionSet } from "@/redux/actions/toolbar";

const mockStore = configureStore([])

function createMounted(action = {type: null}) {
    const stateWithToolbarPosition = createReduceRoot(new ImageStorage())(undefined, action)
    const store = mockStore(stateWithToolbarPosition);
    const wrapper = createMount()(
        <Provider store={store}>
            <div><Toolbar/></div>
        </Provider>
    )
    return {wrapper, store}
}

it('snapshot', () => {
    const {wrapper} = createMounted(actionToolbarPositionSet(101, 102));
    expect(wrapper.html()).toMatchSnapshot()
})

describe('mapDispatchToProps', () => {
    it('onPositionUpdate', () => {
        const {wrapper, store} = createMounted(actionToolbarPositionSet(0, 0));

        const dragButton = wrapper.find('.drag-button').hostNodes();
        expect(dragButton).toHaveLength(1);

        expect(store.getActions()).toHaveLength(0);

        dragButton.simulate('gotPointerCapture', {pageX: 1, pageY: 2});
        dragButton.simulate('pointerMove', {pageX: 10, pageY: 10});
        dragButton.simulate('lostPointerCapture', {});

        const actions = store.getActions();
        expect(actions).toHaveLength(1);
        expect(actions[0]).toEqual(actionToolbarPositionSet(9, 8));
    })
})
