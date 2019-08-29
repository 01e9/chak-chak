import * as React from 'react'
import createReduceRoot from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import { createMount } from '@material-ui/core/test-utils';
import Editor from "@/redux/react/Editor";
import Component, { IEditorProps } from "@/react/Editor";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ImageStorageProvider } from "@/react/context/ImageStorage";

const mockStore = configureStore([])

it('ComponentProps', () => {
    const image = new Image(100, 100)
    const imageStorage = new ImageStorage()
    const stateWithMainImage = createReduceRoot(imageStorage)(undefined, actionMainImageSet(image))
    const store = mockStore(stateWithMainImage)

    const wrapper = createMount()(
        <Provider store={store}>
            <ImageStorageProvider value={imageStorage}>
                <Editor/>
            </ImageStorageProvider>
        </Provider>
    )

    const component = wrapper.find(Component);
    expect(component).toHaveLength(1);

    const expectedProps: IEditorProps = {
        Canvas: expect.anything(),
        Toolbar: expect.anything(),
        ActiveTool: expect.anything(),
    };
    expect(component.props()).toMatchObject(expectedProps);
});
