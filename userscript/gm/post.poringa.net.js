// ==UserScript==
// @name        F*ck Banner Poringa
// @namespace   Violentmonkey Scripts
// @match       https://www.poringa.net/posts/*
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Improve a better view in post pages
 
// ==/UserScript==

// Oculta sidebar y fuerza la expansión y centrado del contenedor principal
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .sidebar.fixable { display: none !important; }
        .v6-content { width: 100% !important; max-width: 100% !important; margin: 0 auto !important; float: none !important; padding-right: 0 !important; }
        .container-post { margin: 0 auto !important; float: none !important; }
    </style>
`);

