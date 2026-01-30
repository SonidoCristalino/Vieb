// ==UserScript==
// @name         F*ck Banner LinkedIn 
// @namespace    Violentmonkey Scripts
// @match        https://www.linkedin.com/messaging/*
// @grant        none
// @version      2.0
// @author       Me
// @description  Limpia la interfaz y rompe el Grid de LinkedIn para pantalla completa.
// @inject-into  document
// @noframes
// ==/UserScript==

// =================================================================
// 1. ELIMINAR EL BANNER DERECHO (ASIDE)
// =================================================================
var aside = document.evaluate('//aside[contains(@class, "scaffold-layout__aside")]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (aside) {
    aside.setAttribute("style", "display: none !important");
}

// =================================================================
// 2. EL TRUCO DE LA COLUMNA (GRID FIX) 
// =================================================================
// Buscamos el contenedor padre que tiene la regla de las columnas.
var gridContainer = document.evaluate('//div[contains(@class, "scaffold-layout__content--list-detail-aside")]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (gridContainer) {
    // Aquí forzamos a una sola columna del 100%
    gridContainer.setAttribute("style", "grid-template-columns: 100% !important;");
}

// =================================================================
// 3. ARREGLAR EL CHAT CENTRAL (MAIN)
// =================================================================
var mainChat = document.evaluate('//*[@id="main"]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (mainChat) {
    // Le decimos que ocupe el ancho total disponible en la nueva columna única
    mainChat.setAttribute("style", 
        "width: 100% !important; max-width: 100% !important; min-width: 0 !important; padding-right: 0 !important;");
}

// =================================================================
// 4. LIMPIEZA DE ELEMENTOS 
// =================================================================

// Enlace Premium en el header
var premium = document.evaluate('//li[contains(@class, "global-nav__primary-item")]//a[contains(@href, "premium")]/ancestor::li',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (premium) premium.setAttribute("style", "display: none !important");

// Botón "Para negocios"
var business = document.evaluate('//li[contains(@class, "global-nav__primary-item")]//a[contains(@href, "business")]/ancestor::li',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (business) business.setAttribute("style", "display: none !important");

// Cabecera interna del chat (Filtros, etc)
var chatHeader = document.evaluate('//div[contains(@class, "msg-conversations-container__title-row")]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (chatHeader) chatHeader.setAttribute("style", "display: none !important");

// Barra de búsqueda principal (Header Global)
var searchBar = document.evaluate('//*[@id="global-nav-search"]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (searchBar) searchBar.setAttribute("style", "display: none !important");

// Barra de búsqueda secundaria (Dentro del chat)
var innerSearchBar = document.evaluate('//*[@id="search-conversations"]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
// Si no lo encuentra por ID, intentamos por el contenedor padre como backup
if (!innerSearchBar) {
    innerSearchBar = document.evaluate('//div[contains(@class, "msg-search-form")]', 
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
if (innerSearchBar) innerSearchBar.setAttribute("style", "display: none !important");

// Footer (que a veces queda flotando)
var footer = document.evaluate('//footer[contains(@class, "global-footer-compact")]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (footer) footer.setAttribute("style", "display: none !important");

// =================================================================
// 5. LIMPIEZA DE TARJETAS 
// =================================================================
const commonSelector = "/html/body/div[6]/div[3]/div[2]/div/div/main/div/div[2]/div[1]/div[2]/ul/li";

for (let i = 2; i <= 10; i++) {
    const selector = `${commonSelector}[${i}]/div/div[2]`;
    const element = document.evaluate(selector, document, null,
        XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.remove();
    }
}
