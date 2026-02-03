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

    // =========================================================================
    // PARTE 1: LIMPIEZA VISUAL (CSS)
    // =========================================================================

    const customCSS = `
        /* 1. ELIMINAR CABECERA */
        header:has(span[data-icon="wa-wordmark-refreshed"]) {
            display: none !important;
        }

        /* NOTA: Eliminada la regla CSS de la barra de búsqueda.
           La ocultaremos vía JS para no interferir con la carga nativa. */

        /* 3. ELIMINAR BARRA DE FILTROS */
        #side div[aria-label="chat-list-filters"] {
            display: none !important;
        }

        /* AJUSTE DE SEGURIDAD */
        #pane-side {
            height: 100% !important;
            top: 0 !important;
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

    // =========================================================================
    // PARTE 2: LÓGICA DE ELEMENTOS (Archivados y Buscador)
    // =========================================================================

    // Esperamos 2 segundos para asegurar que los elementos existan
    setTimeout(function() {

        // --- A. OCULTAR BARRA DE BÚSQUEDA (Solo ocultar) ---
        // Usamos el selector del icono que ya sabemos que funciona
        var searchBar = document.querySelector('#side div:has(span[data-icon="search-refreshed-thin"])');
        
        if (searchBar) {
            searchBar.style.display = "none";
            console.log("Barra de búsqueda ocultada.");
        } else {
            console.log("No se encontró la barra de búsqueda.");
        }

        // --- B. LÓGICA DE CHATS ARCHIVADOS ---
        var elemento = document.querySelector('span[data-icon="archive-refreshed"]');
        
        if (elemento) {
            elemento = elemento.closest('button');
        } else {
            console.log("No se encontró el botón de Archivados.");
            return;
        }

        // 1. Estado inicial: Oculto
        elemento.style.display = "none";
        var visible = false;

        // 2. Función para alternar visibilidad
        function alternarVisibilidad() {
            if (visible) {
                elemento.style.display = "none";
            } else {
                elemento.style.display = "flex"; 
            }
            visible = !visible;
            console.log("Archivados visible: " + visible);
        }

        // 3. Atajo de teclado (Solo para Archivados)
        document.addEventListener('keydown', function(event) {
            if (event.altKey && event.shiftKey && (event.key === 'M' || event.key === 'm')) {
                alternarVisibilidad();
            }
        });
        
    }, 2000); // Retardo de seguridad al inicio

})();
