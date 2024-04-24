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
    $$(".scaffold-layout__main")[0].setAttribute("style", "width: 90vh");
    $$(".scaffold-layout__aside")[0].setAttribute("style", "display: none");
    
    // Doing a better chat height
    $$('#messaging .scaffold-layout__content')[0].setAttribute('style', 'display: unset');
    $$('#main')[0].setAttribute('style', 'height: 100vh');

    // Remove inecessary Premium link
    $$(".premium-upsell-link")[0].setAttribute("style", "display: none");

    // Remove inecessary primary search bar
    $$('#global-nav-search')[0].setAttribute('style', 'display: none');

    // Remove inecessary secondary search bar
    $$('.msg-search-form')[0].setAttribute('style', 'display: none');

    // Remove messages filter
    document.querySelectorAll('.msg-conversations-container__title-row').forEach(Element => {
        Element.remove();});

    // Remove all the config setting in each conversation card
    document.querySelectorAll(".msg-conversation-card__inbox-shortcuts").forEach(Element => {
        Element.remove();})

}, 3000)
