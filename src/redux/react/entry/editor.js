import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import ImageStorage from "@/storage/ImageStorage";
import createReduceRoot from "@/redux/reducers";
import { ImageStorageProvider } from "@/react/context/ImageStorage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import Editor from "@/redux/react/Editor";

export default function createEditor(image) {
    const
        imageStorage = new ImageStorage(),
        store = createStore(createReduceRoot(imageStorage));

    store.dispatch(actionMainImageSet(image));

    const Editor_ = () => (
        <Provider store={store}>
            <ImageStorageProvider value={imageStorage}>
                <Editor/>
            </ImageStorageProvider>
        </Provider>
    )

    return Editor_
}