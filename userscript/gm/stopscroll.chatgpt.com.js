// ==UserScript==
// @name         F*ck ChatGPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unactive auto-scroll and active widescreen
// @author       Me
// @match        https://chat.openai.com/*
// @match        https://chatgpt.com/*
// @grant        none
// ==/UserScript==

// Active Widescreen 
document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);

//Clean local storage to improve chatGPT
localStorage.clear();
sessionStorage.clear();

// // seleccionamos la lista de todos los divs que son preguntas: 
// var divs = document.querySelectorAll('div[data-message-author-role="user"]');

// // Obtener el último div de la NodeList
// var ultimoDiv = divs[divs.length - 1];

// // Calcular la altura del último div medida desde la parte inferior del documento
// var alturaDesdeParteInferior = document.documentElement.scrollHeight - ultimoDiv.getBoundingClientRect().bottom;

// targetDiv = ultimoDiv.querySelector(':scope > div');
// targetDiv.scrollTop = 0;


(function() {
    'use strict';

    function alternateVisibility() {
        
        var answersList = document.querySelectorAll('div[data-message-author-role="user"]');
        var lastAnswer  = answersList[answersList.length - 1];
        
        if (lastAnswer) {
            lastAnswer.scrollIntoView();
            // lastAnswer.setAttribute('tabindex', '0');
            // lastAnswer.focus();
            // window.scrollBy(0,-50);
        }

    }

    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.shiftKey && event.key === 'M') {
            alternateVisibility();
        }
    });

})();
