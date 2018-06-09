let text = ""

document.addEventListener('mouseup', function() {
    if (document.getSelection) {
        text = document.getSelection().toString();
    }
});

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(word, sender, sendResponse){
    chrome.runtime.sendMessage(text)
}