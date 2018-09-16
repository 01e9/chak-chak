import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ImageStorage from "@/storage/ImageStorage";
import createReduceRoot from "@/redux/reducers";
import { ImageStorageProvider } from "@/react/context/ImageStorage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import Editor from "@/redux/react/Editor";
import middlewareAutoDeactivateTool from "@/redux/middleware/autoDeactivateTool";

export default function createEditor(image) {
    const
        imageStorage = new ImageStorage(),
        store = createStore(createReduceRoot(imageStorage), applyMiddleware(middlewareAutoDeactivateTool));

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