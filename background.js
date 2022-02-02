chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
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
