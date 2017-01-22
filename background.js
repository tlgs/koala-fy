var toggle = true;
var code = 'window.location.reload();';

chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if(toggle){
        chrome.tabs.executeScript(tab.id, {code: code});
        chrome.browserAction.setIcon({path: "enabled.png"});
    }
    else{
        chrome.tabs.executeScript(tab.id, {code: code});
        chrome.browserAction.setIcon({path: "disabled.png"});
  }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "hello")
        sendResponse({status: toggle});
    });
