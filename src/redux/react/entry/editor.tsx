import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import ImageStorage from "@/storage/ImageStorage";
import createReduceRoot from "@/redux/reducers";
import { ImageStorageProvider } from "@/react/context/ImageStorage";
import { actionMainImageSet } from "@/redux/actions/mainImage";
import Editor from "@/redux/react/Editor";
import middlewareAutoDeactivateTool from "@/redux/middleware/autoDeactivateTool";
import { actionSizeSetAspectRatio } from "@/redux/actions/size";
import { canvasGetAspectRatio } from "@/utility/canvas";

export default function createEditor(image: HTMLImageElement): React.JSXElementConstructor<{}> {
    const
        imageStorage = new ImageStorage(),
        // @ts-ignore
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
        store = createStore(createReduceRoot(imageStorage), composeEnhancers(applyMiddleware(middlewareAutoDeactivateTool)));

    store.dispatch(actionSizeSetAspectRatio(canvasGetAspectRatio(document.createElement("canvas"))));
    store.dispatch(actionMainImageSet(image));

    return () => (
        <Provider store={store}>
            <ImageStorageProvider value={imageStorage}>
                <Editor/>
            </ImageStorageProvider>
        </Provider>
    )
}
