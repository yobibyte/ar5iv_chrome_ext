var isEnabled = true;
chrome.storage.sync.get(/* String or Array */["ar5iv_enabled"], function(result){
    isEnabled = result.ar5iv_enabled;
});

const setIcon = function(){
    chrome.action.setIcon({path: isEnabled ? "icon128.png" : "icon_nope128.png"});
}

const storeSetting = function(){
    chrome.storage.sync.set({ar5iv_enabled: isEnabled}, function(){});
}

// When the extension icon is clicked, switch back to pdf / ar5iv 
var switch_view = function(tab) {
    if (!isEnabled)   { // arxiv -> ar5iv
        chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: ["arxiv_to_ar5iv"], disableRulesetIds: ["ar5iv_to_arxiv"]}, function() {});
    } else { // ar5iv -> arxiv        
        chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: ["ar5iv_to_arxiv"], disableRulesetIds: ["arxiv_to_ar5iv"]});
    }
    isEnabled ^= true;
    setIcon();
    chrome.tabs.reload(tab.id);
    storeSetting();
}
chrome.action.onClicked.addListener(tab => switch_view(tab));