import * as React from 'react'
import createReduceRoot, { IState } from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";
import { createMount } from '@material-ui/core/test-utils';
import { Provider } from 'react-redux'
import { ImageStorageProvider } from "@/react/context/ImageStorage";
import configureStore from 'redux-mock-store'
import { actionToolActivate } from "@/redux/actions/tools";
import { TOOL_NAME_BRUSH } from "@/constants/tools";
import ToolBrushControl from "@/redux/react/tool/brush/Control";
import Component, { IToolBrushControlProps } from "@/react/tool/brush/Control";

const mockStore = configureStore([])

function createMounted(imageStorage = new ImageStorage(), state: IState) {
    state = state || createReduceRoot(imageStorage)(undefined, {type: "?", payload: null})

    const store = mockStore(state);
    const wrapper = createMount()(
        <Provider store={store}>
            <ImageStorageProvider value={imageStorage}>
                <ToolBrushControl/>
            </ImageStorageProvider>
        </Provider>
    )

    return {wrapper, store}
}

describe('Value props', () => {
    describe('isActive', () => {
        it('false', () => {
            const imageStorage = new ImageStorage();
            const state = createReduceRoot(imageStorage)(undefined, {type: "?", payload: null})
            const { wrapper } = createMounted(imageStorage, state);

            const component = wrapper.find(Component)
            expect(component).toHaveLength(1);

            const { isActive }: IToolBrushControlProps = component.props();
            expect(isActive).toBe(false);
        });
        it('true', () => {
            const imageStorage = new ImageStorage();
            const state = createReduceRoot(imageStorage)(undefined, actionToolActivate(TOOL_NAME_BRUSH))
            const { wrapper } = createMounted(imageStorage, state);

            const component = wrapper.find(Component)
            expect(component).toHaveLength(1);

            const { isActive }: IToolBrushControlProps = component.props();
            expect(isActive).toBe(true);
        });
    });
});

describe('Callback props', () => {
    it('onClick', () => {
        const imageStorage = new ImageStorage();
        const state = createReduceRoot(imageStorage)(undefined, {type: "?", payload: null})
        const { wrapper, store } = createMounted(imageStorage, state);

        const component = wrapper.find(Component)
        expect(component).toHaveLength(1);

        const { onClick }: IToolBrushControlProps = component.props();

        expect(store.getActions()).toHaveLength(0);
        onClick();
        expect(store.getActions()).toEqual([
            actionToolActivate(TOOL_NAME_BRUSH)
        ])
    })
})
