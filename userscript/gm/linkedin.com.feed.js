// ==UserScript==
// @name        F*ck Banner LinkedIn
// @namespace   Violentmonkey Scripts
// @match       https://www.linkedin.com/feed/* 
// @grant       none
// @version     1.0
// @author      Me
// @description 4/21/2024, 3:20:07 PM
// @license     MIT
// @description Try to improve LinkedIn feed removing right banner and expand feed width
 
// @inject-into document
// @noframes
// ==/UserScript==

setTimeout(() => {
  
    // Clearing navigation upgrading the feeds width 
    let $$ = (s) => [document.querySelector(s)];
    $$('.scaffold-layout__main')[0].setAttribute('style', 'width: 90vh');
    $$('.scaffold-layout__aside')[0].setAttribute('style', 'display: none');
    
    // Remove inecessary Premium link
    $$('.premium-upsell-link')[0].setAttribute('style', 'display: none');

}, 3000)
