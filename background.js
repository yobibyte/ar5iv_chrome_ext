var manual_switch = false; // flag set to true when the extension icon has been clicked

// Callback intercepts initial arxiv page load and switches to ar5iv
//depricated for now, since  chrome store now forces manifest v3 which forces to not use blocking webRequestListeners
//TODO: reanable "?forcepdf""
// var callback = function(details) {
//     if (details.url.endsWith("?forcepdf") || manual_switch) {
//         return;
//     }
//     return {redirectUrl: details.url.replace("arxiv", "ar5iv")};
// }
// var filter= {urls: ["*://arxiv.org/pdf/*", "*://www.arxiv.org/pdf/*"]}
// chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["blocking"]);

// When the extension icon is clicked, switch back to pdf / ar5iv 
// TODO icon depending on which is being viewed
var switch_view = function(tab) {
    manual_switch = true;
    if (tab.url.includes("arxiv.org/pdf/"))   { // arxiv -> ar5iv
        chrome.tabs.update(tab.id, {url: tab.url.replace("arxiv", "ar5iv")});
    } else if (tab.url.includes("ar5iv")) { // ar5iv -> arxiv
        chrome.tabs.update(tab.id, {url: tab.url.replace("ar5iv.org/html/", "arxiv.org/pdf/")});
        chrome.tabs.update(tab.id, {url: tab.url.replace("ar5iv.labs.arxiv.org/html/", "arxiv.org/pdf/")});
    }
}
chrome.action.onClicked.addListener(tab => switch_view(tab));