// ==UserScript==
// @name         F*ck ChatGPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unactive auto-scroll and active widescreen
// @author       Me
// @match        https://chat.openai.com/*
// @match        https://chatgpt.com/*
// @grant        GM_addStyle
// ==/UserScript==

// ¡ATENTION: Widescreen functionality taken from: https://greasyfork.org/en/scripts/494023-chatgpt-widescreen-ultra-fast/code

// Expand general responses to 100% of the available width.
GM_addStyle(".text-token-text-primary>div>div{max-width:100%!important}");
 
// For "Which response do you prefer? [Response 1 | Response 2]": expand both responses to 50% of the available width.
GM_addStyle(".min-w-fit>div{max-width:100%!important}");
 
// Function to stop scroll when you ask something
(function() {
    'use strict';

    function alternateVisibility() {
        
        var answersList = document.querySelectorAll('div[data-message-author-role="user"]');
        var lastAnswer  = answersList[answersList.length - 1];
        
        if (lastAnswer) {
            lastAnswer.scrollIntoView();
        }

    }

    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.shiftKey && event.key === 'M') {
            alternateVisibility();
        }
    });

})();
