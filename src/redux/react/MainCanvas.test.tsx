import * as React from 'react'
import createReduceRoot from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import { createMount } from '@material-ui/core/test-utils';
import MainCanvas from "@/redux/react/MainCanvas";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ImageStorageProvider } from "@/react/context/ImageStorage";

const mockStore = configureStore([])

describe('snapshot', () => {
    it('main image', () => {
        const image = new Image(100, 100)
        const imageStorage = new ImageStorage()
        const stateWithMainImage = createReduceRoot(imageStorage)(undefined, actionMainImageSet(image))
        const store = mockStore(stateWithMainImage)

        const wrapper = createMount()(
            <Provider store={store}>
                <ImageStorageProvider value={imageStorage}>
                    <div><MainCanvas/></div>
                </ImageStorageProvider>
            </Provider>
        )
        expect(wrapper.html()).toMatchSnapshot()
    })
})
