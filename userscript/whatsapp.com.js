// ==UserScript==
// @name         WhatsApp Web - Limpieza y Archivados (Lógica Original)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Limpia interfaz (CSS) de la página de Whatsapp
// @author       DevOps Features
// @match        https://web.whatsapp.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // =========================================================================
    // PARTE 1: LIMPIEZA VISUAL
    // =========================================================================

    const customCSS = `
        /* 1. ELIMINAR CABECERA */
        header:has(span[data-icon="wa-wordmark-refreshed"]) {
            display: none !important;
        }

        /* 2. ELIMINAR BARRA DE BÚSQUEDA */
        #side div:has(span[data-icon="search-refreshed-thin"]) {
            display: none !important;
        }

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
    // PARTE 2: LÓGICA DE CHATS ARCHIVADOS 
    // =========================================================================

    // Esperamos 2 segundos para asegurar que el elemento exista antes de asignarlo a la variable
    setTimeout(function() {

        // AJUSTE NECESARIO: En lugar de "#pane-side > button", usamos el selector seguro del icono.
        // Esto es vital porque la estructura HTML de WhatsApp cambió.
        var elemento = document.querySelector('span[data-icon="archive-refreshed"]');
        
        // Si encontramos el icono, subimos al botón contenedor. Si no, cortamos ejecución.
        if (elemento) {
            elemento = elemento.closest('button');
        } else {
            console.log("No se encontró el botón de Archivados.");
            return;
        }

        // 1. Estado inicial: Oculto
        elemento.style.display = "none";
        var visible = false;

        // 2. Función para alternar
        function alternarVisibilidad() {
            if (visible) {
                elemento.style.display = "none";
            } else {
                // Usamos 'flex' o '' para mostrarlo correctamente en WhatsApp
                elemento.style.display = "flex"; 
            }
            visible = !visible;
            console.log("Archivados visible: " + visible);
        }

        // 3. Atajo de teclado
        document.addEventListener('keydown', function(event) {
            // Se agrega soporte para 'm' minúscula y mayúscula por seguridad
            if (event.altKey && event.shiftKey && (event.key === 'M' || event.key === 'm')) {
                alternarVisibilidad();
            }
        });
        
    }, 2000); // Retardo de seguridad al inicio

})();
