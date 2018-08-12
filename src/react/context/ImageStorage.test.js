import React from 'react'
import { createRender } from '@material-ui/core/test-utils';
import ImageStorageContext, { ImageStorageProvider, ImageStorageConsumer } from "@/react/context/ImageStorage";
import ImageStorage from "@/storage/ImageStorage";

it('default value', () => {
    let receivedValue;
    createRender()(
        <ImageStorageContext.Consumer>
            {(value) => { receivedValue = value; }}
        </ImageStorageContext.Consumer>
    )
    expect(receivedValue).toBe(null)
})
it('explicit value', () => {
    const imageStorage = new ImageStorage()
    let receivedValue;
    createRender()(
        <ImageStorageProvider value={imageStorage}>
            <ImageStorageConsumer>
                {(value) => { receivedValue = value; }}
            </ImageStorageConsumer>
        </ImageStorageProvider>
    )
    expect(receivedValue).toBe(imageStorage)
})