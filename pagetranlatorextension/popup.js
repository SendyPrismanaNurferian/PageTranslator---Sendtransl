document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('languages');
    const translateButton = document.getElementById('apitranslate');

    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.code;
        option.textContent = lang.name;
        langSelect.appendChild(option);
    });

    translateButton.addEventListener('click', () => {
        const language = langSelect.value;
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['apitranslate.js']
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { language });
            });
        });
    });
});