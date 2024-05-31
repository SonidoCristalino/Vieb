// ==UserScript==
// @name        F*ck Banner LinkedIn
// @namespace   Violentmonkey Scripts
// @match       https://www.linkedin.com/messaging/*
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Improve Linkedin chat page deleting some useless objects
 
// @inject-into document
// @noframes
// ==/UserScript==

setTimeout(() => {
  
    let $$ = (s) => [document.querySelector(s)];
    
    // Clearing navigation upgrading the feeds width 
    $$(".scaffold-layout__main")[0].setAttribute("style", "width: 90vh");
    $$(".scaffold-layout__aside")[0].setAttribute("style", "display: none");
    
    // Doing a better chat height
    $$('#messaging .scaffold-layout__content')[0].setAttribute('style', 'display: unset');
    $$('#main')[0].setAttribute('style', 'height: 100vh');

    // Remove inecessary Premium link
    $$(".premium-upsell-link")[0].setAttribute("style", "display: none");

    // Remove inecessary primary search bar
    $$("#global-nav-search")[0].setAttribute("style", "display: none");

    // Remove inecessary secondary search bar
    $$(".msg-search-form")[0].setAttribute("style", "display: none");

    // Remove messages filter
    document.querySelectorAll(".msg-conversations-container__title-row").forEach(Element => {
        Element.remove();});

    // Remove all the config setting in each conversation card
    document.querySelectorAll(".msg-conversation-card__inbox-shortcuts").forEach(Element => {
        Element.remove();})

}, 3000)
