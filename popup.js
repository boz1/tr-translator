document.addEventListener('DOMContentLoaded', function() {
    let word = ""
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs)

    function gotTabs(tabs){
        chrome.tabs.sendMessage(tabs[0].id, word)
    }

    chrome.runtime.onMessage.addListener(gotMessage);

    function gotMessage(text, sender, sendResponse){
        document.getElementById("source").style.cssText = "font-size: 10px; font-style: italic; color: grey"; 
        document.getElementById("translation").style.cssText = "font-size: 20px;"; 
        let response = translate(text);
        document.getElementById("source").innerHTML = response.source
        document.getElementById("translation").innerHTML = response.result
    }
});
    
function translate(text){
    var sourceText = text
    
    var sourceLang = 'auto';
  
    var targetLang = 'tr';
    
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
              + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    
    let xhr1 = new XMLHttpRequest();
    xhr1.open("GET", url, false);
    xhr1.send();
    let response = JSON.parse(xhr1.response)
    let translation = ""
    for(elt of response[0]){
        translation += elt[0] + ' '
    }

    let translatorResponse = {
        source : text,
        result : translation
    }

    return translatorResponse
}
