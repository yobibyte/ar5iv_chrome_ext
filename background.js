var callback = function(details) {
    if (details.url.endsWith("?forcepdf")) {
        return;
    }
    return {redirectUrl: details.url.replace("arxiv", "ar5iv")};
}
var filter= {urls: ["*://arxiv.org/pdf/*", "*://www.arxiv.org/pdf/*"]}
chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["blocking"]);
