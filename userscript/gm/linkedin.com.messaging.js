// ==UserScript==
// @name        Expand functionality chat on Linkedin
// @namespace   Violentmonkey Scripts
// @match       https://www.linkedin.com/messaging/*
// @grant       none
// @version     0.5
// @author      Siarhei Siniak & others. 
// @license     Unlicense
// @description Try to improve LinkedIn chat removing elements that prevent good experience.
 
// @inject-into document
// @noframes
// ==/UserScript==
 
setTimeout(() => {
  
    let $$ = (s) => [document.querySelector(s)];
    $$("#messaging .scaffold-layout__content")[0].setAttribute("style", "display: unset");
    $$(".scaffold-layout__aside")[0].setAttribute("style", "display: none");
    // $$("#main")[0].setAttribute("style", "width: 120vh");
    $$(".scaffold-layout__main")[0].setAttribute("style", "width: 120vh");
    

    // Remove inecessary primary search bar
    $$("#global-nav-search")[0].setAttribute("style", "display: none");

    // Remove inecessary secondary search bar
    $$(".msg-search-form")[0].setAttribute("style", "display: none");

    // Remove inecessary Premium link
    $$(".premium-upsell-link")[0].setAttribute("style", "display: none");

    // Remove messages filter
    document.querySelectorAll(".msg-conversations-container__title-row").forEach(Element => {
        Element.remove();});

    // Remove all the config setting in each conversation card
    document.querySelectorAll(".msg-conversation-card__inbox-shortcuts").forEach(Element => {
        Element.remove();})
 
}, 3000)
