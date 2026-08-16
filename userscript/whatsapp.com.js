// ==UserScript==
// @name         WhatsApp Web - Limpieza, Archivados y Buscador (Solo Ocultar)
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Limpia interfaz. Oculta Buscador y Archivados por defecto.
// @author       DevOps Features
// @match        https://web.whatsapp.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Inyectar CSS para elementos estáticos
    const customCSS = `
        header[data-testid="chatlist-header"] {
            display: none !important;
        }
        #side div[aria-label="chat-list-filters"] {
            display: none !important;
        }
        #pane-side {
            height: 100% !important;
            top: 0 !important;
        }
        div[data-testid="drawer-left"] {
            margin-left: 0px !important;
        }
    `;

    function addGlobalStyle(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(customCSS);
    } else {
        addGlobalStyle(customCSS);
    }

    // Lógica dinámica para Buscador y Archivados
    setTimeout(function() {
        
        var searchInput = document.querySelector('[data-testid="chat-list-search-container"]');
        var searchBar = searchInput ? searchInput.parentElement : null;

        if (searchBar) {
            searchBar.style.display = "none";
        }

        var elementoArchivados = document.querySelector('button[data-testid="chatlist-panel-archived-button"]');
        
        if (!elementoArchivados) {
            return;
        }

        elementoArchivados.style.display = "none";
        var archivadosVisible = false;

        function alternarVisibilidad() {
            elementoArchivados.style.display = archivadosVisible ? "none" : "flex"; 
            archivadosVisible = !archivadosVisible;
        }

        document.addEventListener('keydown', function(event) {
            if (event.altKey && event.shiftKey && (event.key === 'M' || event.key === 'm')) {
                alternarVisibilidad();
            }
        });
        
    }, 2000);

})();
