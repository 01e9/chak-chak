import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CMD_GET_CAPTURE } from "@/constants/extension";
import { imageFromSrc } from "@/utility/image";
import createEditor from "@/redux/react/entry/editor";

chrome.runtime.sendMessage({cmd: CMD_GET_CAPTURE}, (dataUrl: string) => {
    imageFromSrc(dataUrl).then(
        (image) => {
            const Editor = createEditor(image);

            ReactDOM.render(
                <Editor/>,
                document.getElementById('root')
            );
        },
        () => {
            ReactDOM.render(
                <h1>Oops, can't load the captured image.</h1>,
                document.getElementById('root')
            );
        });
});
