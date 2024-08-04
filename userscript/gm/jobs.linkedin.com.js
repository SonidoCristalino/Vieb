// ==UserScript==
// @name        F*ck Banner LinkedIn
// @namespace   Violentmonkey Scripts
// @match       https://www.linkedin.com/jobs/view/*
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Improve Jobs View section
 
// @inject-into document
// @noframes
// ==/UserScript==

// ██╗     ██╗███╗   ██╗██╗  ██╗███████╗██████╗ ██╗███╗   ██╗
// ██║     ██║████╗  ██║██║ ██╔╝██╔════╝██╔══██╗██║████╗  ██║
// ██║     ██║██╔██╗ ██║█████╔╝ █████╗  ██║  ██║██║██╔██╗ ██║
// ██║     ██║██║╚██╗██║██╔═██╗ ██╔══╝  ██║  ██║██║██║╚██╗██║
// ███████╗██║██║ ╚████║██║  ██╗███████╗██████╔╝██║██║ ╚████║
// ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝╚═╝  ╚═══╝

setTimeout(() => {
  
    let $$ = (s) => [document.querySelector(s)];

    // Increase width feeds
    $$(".scaffold-layout__main")[0].setAttribute("style", "width: 90vh");

    // Removing right panel 
    $$(".scaffold-layout__aside")[0].setAttribute("style", "display: none");
    
    // Remove inecessary Premium link
    $$(".premium-upsell-link")[0].setAttribute("style", "display: none");

    // Remove inecessary primary search bar
    $$("#global-nav-search")[0].setAttribute("style", "display: none");

    // Remove inecessary secondary search bar
    $$(".msg-search-form")[0].setAttribute("style", "display: none");

}, 3000)
