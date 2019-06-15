import { CMD_GET_CAPTURE } from "@/constants/extension";
import LimitedStorage from "@/storage/LimitedStorage";
import { canvasGetAspectRatio } from "@/utility/canvas";
import { IMG_1PX_DATA_URL } from "@/constants/html";

const captures = new LimitedStorage<string, number>(7);
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

chrome.runtime.onMessage.addListener((m, sender, sendResponse) => {
    if (!sender.tab || !sender.tab.id || sender.id !== chrome.runtime.id) {
        return;
    }

    if (CMD_GET_CAPTURE === m.cmd) {
        sendResponse(captures.get(sender.tab.id));
    }
});

chrome.pageAction.onClicked.addListener(() => {
    // @ts-ignore captureVisibleTab() TS definition doesn't allow `undefined` but it's required
    chrome.tabs.captureVisibleTab(undefined, {format: 'png'}, dataUrl => {
        if (isFirefox) { // https://bugzilla.mozilla.org/show_bug.cgi?id=1278507
            const image = new Image();
            image.onload = () => {
                image.onload = () => {};

                const canvas = document.createElement('canvas');
                const canvasAspectRatio = canvasGetAspectRatio(canvas);
                canvas.width = image.naturalWidth * canvasAspectRatio;
                canvas.height = image.naturalHeight * canvasAspectRatio;

                const context = canvas.getContext('2d');
                if (!context) {
                    return;
                }
                context.scale(canvasAspectRatio, canvasAspectRatio);
                context.drawImage(image, 0, 0);
                image.src = IMG_1PX_DATA_URL;

                dataUrl = canvas.toDataURL();
                canvas.width = canvas.height = 0;

                chrome.tabs.create(
                    {url: chrome.extension.getURL('editor.html')},
                    tab => {
                        if (tab.id) {
                            captures.add(tab.id, dataUrl);
                        } else {
                            console.warn('No tab id');
                        }
                    }
                );
            };
            image.onerror = () => { console.warn('Image error'); };
            image.src = dataUrl;
        } else {
            chrome.tabs.create(
                {url: chrome.extension.getURL('editor.html')},
                tab => {
                    if (tab.id) {
                        captures.add(tab.id, dataUrl);
                    } else {
                        console.warn('No tab id');
                    }
                }
            );
        }
    });
});
