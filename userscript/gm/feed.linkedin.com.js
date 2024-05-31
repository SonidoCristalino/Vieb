// ==UserScript==
// @name        F*ck Banner LinkedIn
// @namespace   Violentmonkey Scripts
// @match       https://www.linkedin.com/feed/* 
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Try to improve LinkedIn feed removing right banner and expand feed width
 
// @inject-into document
// @noframes
// ==/UserScript==

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

    // Remove unnecessary chat list
    $$(".msg-overlay-list-bubble")[0].setAttribute("style", "display: none");
    
}, 3000)
