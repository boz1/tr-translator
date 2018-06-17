let langCodes = {
    "af":    "Afrikaans",
    "sq":    "Albanian",
    "ar":    "Arabic (Standard)",
    "ar-dz": "Arabic (Algeria)",
    "ar-bh": "Arabic (Bahrain)",
    "ar-eg": "Arabic (Egypt)",
    "ar-iq": "Arabic (Iraq)",
    "ar-jo": "Arabic (Jordan)",
    "ar-kw": "Arabic (Kuwait)",
    "ar-lb": "Arabic (Lebanon)",
    "ar-ly": "Arabic (Libya)",
    "ar-ma": "Arabic (Morocco)",
    "ar-om": "Arabic (Oman)",
    "ar-qa": "Arabic (Qatar)",
    "ar-sa": "Arabic (Saudi Arabia)",
    "ar-sy": "Arabic (Syria)",
    "ar-tn": "Arabic (Tunisia)",
    "ar-ae": "Arabic (U.A.E.)",
    "ar-ye": "Arabic (Yemen)",
    "ar":    "Aragonese",
    "hy":    "Armenian",
    "as":    "Assamese",
    "ast":   "Asturian",
    "az":    "Azerbaijani",
    "eu":    "Basque",
    "bg":    "Bulgarian",
    "be":    "Belarusian",
    "bn":    "Bengali",
    "bs":    "Bosnian",
    "br":    "Breton",
    "bg":    "Bulgarian",
    "my":    "Burmese",
    "ca":    "Catalan",
    "ch":    "Chamorro",
    "ce":    "Chechen",
    "zh":    "Chinese",
    "zh-hk": "Chinese (Hong Kong)",
    "zh-cn": "Chinese (PRC)",
    "zh-sg": "Chinese (Singapore)",
    "zh-tw": "Chinese (Taiwan)",
    "cv":    "Chuvash",
    "co":    "Corsican",
    "cr":    "Cree",
    "hr":    "Croatian",
    "cs":    "Czech",
    "da":    "Danish",
    "nl":    "Dutch (Standard)",
    "nl-be": "Dutch (Belgian)",
    "en":    "English",
    "en-au": "English (Australia)",
    "en-bz": "English (Belize)",
    "en-ca": "English (Canada)",
    "en-ie": "English (Ireland)",
    "en-jm": "English (Jamaica)",
    "en-nz": "English (New Zealand)",
    "en-ph": "English (Philippines)",
    "en-za": "English (South Africa)",
    "en-tt": "English (Trinidad & Tobago)",
    "en-gb": "English (United Kingdom)",
    "en-us": "English (United States)",
    "en-zw": "English (Zimbabwe)",
    "eo":    "Esperanto",
    "et":    "Estonian",
    "fo":    "Faeroese",
    "fa":    "Farsi",
    "fj":    "Fijian",
    "fi":    "Finnish",
    "fr":    "French (Standard)",
    "fr-be": "French (Belgium)",
    "fr-ca": "French (Canada)",
    "fr-fr": "French (France)",
    "fr-lu": "French (Luxembourg)",
    "fr-mc": "French (Monaco)",
    "fr-ch": "French (Switzerland)",
    "fy":    "Frisian",
    "fur":   "Friulian",
    "gd":    "Gaelic (Scots)",
    "gd-ie": "Gaelic (Irish)",
    "gl":    "Galacian",
    "ka":    "Georgian",
    "de":    "German (Standard)",
    "de-at": "German (Austria)",
    "de-de": "German (Germany)",
    "de-li": "German (Liechtenstein)",
    "de-lu": "German (Luxembourg)",
    "de-ch": "German (Switzerland)",
    "el":    "Greek",
    "gu":    "Gujurati",
    "ht":    "Haitian",
    "he":    "Hebrew",
    "hi":    "Hindi",
    "hu":    "Hungarian",
    "is":    "Icelandic",
    "id":    "Indonesian",
    "iu":    "Inuktitut",
    "ga":    "Irish",
    "it":    "Italian (Standard)",
    "it-ch": "Italian (Switzerland)",
    "ja":    "Japanese",
    "kn":    "Kannada",
    "ks":    "Kashmiri",
    "kk":    "Kazakh",
    "km":    "Khmer",
    "ky":    "Kirghiz",
    "tlh":   "Klingon",
    "ko":    "Korean",
    "ko-kp": "Korean (North Korea)",
    "ko-kr": "Korean (South Korea)",
    "la":    "Latin",
    "lv":    "Latvian",
    "lt":    "Lithuanian",
    "lb":    "Luxembourgish",
    "mk":    "FYRO Macedonian",
    "ms":    "Malay",
    "ml":    "Malayalam",
    "mt":    "Maltese",
    "mi":    "Maori",
    "mr":    "Marathi",
    "mo":    "Moldavian",
    "nv":    "Navajo",
    "ng":    "Ndonga",
    "ne":    "Nepali",
    "no":    "Norwegian",
    "nb":    "Norwegian (Bokmal)",
    "nn":    "Norwegian (Nynorsk)",
    "oc":    "Occitan",
    "or":    "Oriya",
    "om":    "Oromo",
    "fa":    "Persian",
    "fa-ir": "Persian/Iran",
    "pl":    "Polish",
    "pt":    "Portuguese",
    "pt-br": "Portuguese (Brazil)",
    "pa":    "Punjabi",
    "pa-in": "Punjabi (India)",
    "pa-pk": "Punjabi (Pakistan)",
    "qu":    "Quechua",
    "rm":    "Rhaeto-Romanic",
    "ro":    "Romanian",
    "ro-mo": "Romanian (Moldavia)",
    "ru":    "Russian",
    "ru-mo": "Russian (Moldavia)",
    "sz":    "Sami (Lappish)",
    "sg":    "Sango",
    "sa":    "Sanskrit",
    "sc":    "Sardinian",
    "gd":    "Scots Gaelic",
    "sd":    "Sindhi",
    "si":    "Singhalese",
    "sr":    "Serbian",
    "sk":    "Slovak",
    "sl":    "Slovenian",
    "so":    "Somani",
    "sb":    "Sorbian",
    "es":    "Spanish",
    "es-ar": "Spanish (Argentina)",
    "es-bo": "Spanish (Bolivia)",
    "es-cl": "Spanish (Chile)",
    "es-co": "Spanish (Colombia)",
    "es-cr": "Spanish (Costa Rica)",
    "es-do": "Spanish (Dominican Republic)",
    "es-ec": "Spanish (Ecuador)",
    "es-sv": "Spanish (El Salvador)",
    "es-gt": "Spanish (Guatemala)",
    "es-hn": "Spanish (Honduras)",
    "es-mx": "Spanish (Mexico)",
    "es-ni": "Spanish (Nicaragua)",
    "es-pa": "Spanish (Panama)",
    "es-py": "Spanish (Paraguay)",
    "es-pe": "Spanish (Peru)",
    "es-pr": "Spanish (Puerto Rico)",
    "es-es": "Spanish (Spain)",
    "es-uy": "Spanish (Uruguay)",
    "es-ve": "Spanish (Venezuela)",
    "sx":    "Sutu",
    "sw":    "Swahili",
    "sv":    "Swedish",
    "sv-fi": "Swedish (Finland)",
    "sv-sv": "Swedish (Sweden)",
    "ta":    "Tamil",
    "tt":    "Tatar",
    "te":    "Teluga",
    "th":    "Thai",
    "tig":   "Tigre",
    "ts":    "Tsonga",
    "tn":    "Tswana",
    "tr":    "Turkish",
    "tk":    "Turkmen",
    "uk":    "Ukrainian",
    "hsb":   "Upper Sorbian",
    "ur":    "Urdu",
    "ve":    "Venda",
    "vi":    "Vietnamese",
    "vo":    "Volapuk",
    "wa":    "Walloon",
    "cy":    "Welsh",
    "xh":    "Xhosa",
    "ji":    "Yiddish",
    "zu":    "Zulu",
};

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
        document.getElementById("lang").style.cssText = "font-size: 10px; font-style: italic; color: grey; font-weight: bold;";  
        document.getElementById("translation").style.cssText = "font-size: 14px;"; 
        let response = translate(text);
        document.getElementById("source").innerHTML = response.source
        document.getElementById("source").appendChild(document.createElement("br"))
        document.getElementById("lang").appendChild(document.createTextNode(response.language))
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

    let lang = getLanguage(response[2])

    let translatorResponse = {
        source : text,
        result : translation,
        language : lang
    }

    return translatorResponse
}

function getLanguage(langCode){
    let codes = Object.keys(langCodes)

    let language = codes.find(function(code) {
        return code === langCode
    });

    return langCodes[language]
}

