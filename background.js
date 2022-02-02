chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url.endsWith("?forcepdf")) {
            return;
        }
        return {redirectUrl: details.url.replace("arxiv", "ar5iv")};
    },
    {
        urls: [
            "*://arxiv.org/pdf/*",
            "*://www.arxiv.org/pdf/*"
        ],
    },
    ["blocking"]
);
