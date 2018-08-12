import {CMD_GET_CAPTURE} from "@/constants/extension";
import LimitedStorage from "@/storage/LimitedStorage";
import {canvasGetAspectRatio} from "@/utility/canvas";
import {IMG_1PX_DATA_URL} from "@/constants/html";

const captures = new LimitedStorage(7);
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

/*global chrome*/

chrome.runtime.onMessage.addListener((m, sender, sendResponse) => {
    if (sender.id !== chrome.runtime.id) {
        return;
    }

    if (CMD_GET_CAPTURE === m.cmd) {
        sendResponse(captures.get(sender.tab.id));
    }
});

chrome.pageAction.onClicked.addListener(() => {
    chrome.tabs.captureVisibleTab(null, {format: 'png'}, (dataUrl) => {
        if (isFirefox) { // https://bugzilla.mozilla.org/show_bug.cgi?id=1278507
            const image = new Image();
            image.onload = () => {
                image.onload = () => {};

                const canvas = document.createElement('canvas');
                const canvasAspectRatio = canvasGetAspectRatio(canvas);
                canvas.width = image.naturalWidth * canvasAspectRatio;
                canvas.height = image.naturalHeight * canvasAspectRatio;

                const context = canvas.getContext('2d');
                context.scale(canvasAspectRatio, canvasAspectRatio);
                context.drawImage(image, 0, 0);
                image.src = IMG_1PX_DATA_URL;

                dataUrl = canvas.toDataURL();
                canvas.width = canvas.height = 0;

                chrome.tabs.create(
                    {url: chrome.extension.getURL('editor.html')},
                    (tab) => { captures.add(tab.id, dataUrl); }
                );
            };
            image.onerror = () => { console.warn('Image error'); };
            image.src = dataUrl;
        } else {
            chrome.tabs.create(
                {url: chrome.extension.getURL('editor.html')},
                (tab) => { captures.add(tab.id, dataUrl); }
            );
        }
    });
});