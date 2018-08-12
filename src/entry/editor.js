import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CMD_GET_CAPTURE } from "@/constants/extension";
import { imageFromSrc } from "@/utility/image";
import createEditor from "@/redux/react/entry/editor";

/*global chrome*/
chrome.runtime.sendMessage({cmd: CMD_GET_CAPTURE}, (dataUrl) => {
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
