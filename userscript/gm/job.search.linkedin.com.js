// ==UserScript==
// @name        F*ck Banner LinkedIn
// @namespace   Violentmonkey Scripts
// @match       https://www.linkedin.com/jobs/collections/recommended/*
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description In job search section, remove some unecessary objects
 
// @inject-into document
// @noframes
// ==/UserScript==

setTimeout(() => {
  
    let $$ = (s) => [document.querySelector(s)];
    
    // Remove unecessary Premium link
    $$(".premium-upsell-link")[0].setAttribute("style", "display: none");

    // Remove unecessary primary search bar
    $$("#global-nav-search")[0].setAttribute("style", "display: none");

    // Remove unnecessary chat list
    $$(".msg-overlay-list-bubble")[0].setAttribute("style", "display: none");
    
    // Remove unnecessary toolbar filters
    $$(".scaffold-layout-toolbar")[0].setAttribute("style", "display: none");

}, 3000)
