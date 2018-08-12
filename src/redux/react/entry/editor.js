import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import ImageStorage from "@/storage/ImageStorage";
import createReduceRoot from "@/redux/reducers";
import { ImageStorageProvider } from "@/react/context/ImageStorage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import MainCanvas from "@/redux/react/MainCanvas";
import Toolbar from "@/react/Toolbar";

export default function createEditor(image) {
    const
        imageStorage = new ImageStorage(),
        store = createStore(createReduceRoot(imageStorage));

    store.dispatch(actionMainImageSet(image));

    const Editor = () => (
        <Provider store={store}>
            <ImageStorageProvider value={imageStorage}>
                <Toolbar/>
                <MainCanvas/>
            </ImageStorageProvider>
        </Provider>
    )

    return Editor
}