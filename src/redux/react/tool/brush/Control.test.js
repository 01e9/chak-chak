import * as React from 'react'
import createReduceRoot from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";
import { createMount } from '@material-ui/core/test-utils';
import { Provider } from 'react-redux'
import { ImageStorageProvider } from "@/react/context/ImageStorage";
import configureStore from 'redux-mock-store'
import { actionToolActivate } from "@/redux/actions/tools";
import { TOOL_NAME_BRUSH } from "@/constants/tools";
import ToolBrushControl from "@/redux/react/tool/brush/Control";

const mockStore = configureStore([])

function createMounted(imageStorage = new ImageStorage(), state) {
    state = state || createReduceRoot(imageStorage)(undefined, {type: undefined})

    const store = mockStore(state);
    const wrapper = createMount()(
        <Provider store={store}>
            <ImageStorageProvider value={imageStorage}>
                <div><ToolBrushControl/></div>
            </ImageStorageProvider>
        </Provider>
    )

    return {wrapper, store}
}

describe('snapshot', () => {
    it('inactive', () => {
        const { wrapper } = createMounted();
        expect(wrapper.html()).toMatchSnapshot();
    })
    it('active', () => {
        const imageStorage = new ImageStorage();
        const state = createReduceRoot(imageStorage)(undefined, actionToolActivate(TOOL_NAME_BRUSH))
        const { wrapper } = createMounted(imageStorage, state);
        expect(wrapper.html()).toMatchSnapshot();
    })
})

describe('mapDispatchToProps', () => {
    it('onClick', () => {
        const imageStorage = new ImageStorage();
        const state = createReduceRoot(imageStorage)(undefined, {type: null})
        const { wrapper, store } = createMounted(imageStorage, state);

        const button = wrapper.find('button')
        expect(button).toHaveLength(1);

        expect(store.getActions()).toHaveLength(0);
        button.simulate('click')
        const actions = store.getActions()
        expect(actions).toHaveLength(1)
        expect(actions[0]).toEqual(actionToolActivate(TOOL_NAME_BRUSH))
    })
})
