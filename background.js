
var twitterOpen = false;
var instagramOpen = false;
var mySound = new Audio('audio.mp3');


function checkTwitterOpen() {
    chrome.tabs.query({ url: 'https://twitter.com/*' }, function (tabs) {
        if (tabs.length > 0) {
            twitterOpen = true;
            mySound.loop = true;
            mySound.play();
        } else {
            twitterOpen = false;
            mySound.pause();
        }
    });
}

checkTwitterOpen();

chrome.tabs.onCreated.addListener(checkTwitterOpen);

chrome.tabs.onRemoved.addListener(checkTwitterOpen);

chrome.tabs.onUpdated.addListener(checkTwitterOpen);