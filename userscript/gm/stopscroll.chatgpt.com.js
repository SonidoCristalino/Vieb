// ==UserScript==
// @name         Desactivar Autoscroll en ChatGPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Desactiva el autoscroll en ChatGPT
// @author       Tu Nombre
// @match        https://chat.openai.com/*
// @match        https://chatgpt.com/*
// @grant        none
// ==/UserScript==

document.styleSheets[0].insertRule('.text-token-text-primary>div>div{max-width:100%!important}',0);

(function() {
    'use strict';

    // Función que previene el autoscroll
    function preventAutoscroll() {
        console.log('preventAutoscroll function called');
        
        // Selecciona todos los elementos con clases que comienzan con "react-scroll-to-bottom--css-"
        // const chatContainers = document.querySelectorAll('[class^="react-scroll-to-bottom--css-"]');
        const chatContainers = document.querySelectorAll('[class^="w-full text-token-text-primary"]');
        console.log('Found chat containers:', chatContainers);

        if (chatContainers.length > 0) {
            // Selecciona el último contenedor
            const chatContainer = chatContainers[chatContainers.length - 1];
            console.log('Selected chat container:', chatContainer);

            // Desactiva el comportamiento de desplazamiento automático
            chatContainer.scrollIntoView = function() {
                console.log('scrollIntoView called');
            };
        } else {
            console.log('No chat containers found');
        }
    }

    // Espera a que la página se cargue completamente
    window.addEventListener('load', () => {
        console.log('Page loaded');
        preventAutoscroll();
    });

    // También puedes observar cambios en el DOM por si el contenido se carga dinámicamente
    const observer = new MutationObserver(() => {
        console.log('Mutation observed');
        preventAutoscroll();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();

