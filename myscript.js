var koalaHunting = function(parent){
    for(var i = 0; i < parent.childNodes.length; i++){
        var node = parent.childNodes[i];
        if(node.nodeType == Element.TEXT_NODE){
            node.textContent = node.textContent.replace(new RegExp(/[kcq][uo]al[ai]h?/, "gi"),
                                                        String.fromCodePoint(0x1F428));
        } else if(node.nodeType == Element.ELEMENT_NODE) {
            koalaHunting(node);
        }
    }
};

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  if(response.status)
    koalaHunting(document.body);
});
