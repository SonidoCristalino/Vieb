
// ██╗     ██╗███╗   ██╗██╗  ██╗███████╗██████╗ ██╗███╗   ██╗
// ██║     ██║████╗  ██║██║ ██╔╝██╔════╝██╔══██╗██║████╗  ██║
// ██║     ██║██╔██╗ ██║█████╔╝ █████╗  ██║  ██║██║██╔██╗ ██║
// ██║     ██║██║╚██╗██║██╔═██╗ ██╔══╝  ██║  ██║██║██║╚██╗██║
// ███████╗██║██║ ╚████║██║  ██╗███████╗██████╔╝██║██║ ╚████║
// ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝╚═╝  ╚═══╝

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

// Remove stupid right chat element
document.evaluate('/html/body/div[6]/div[3]/div[2]/div/div/aside',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "display: none");

// We define the correct height of the chat (this is necessary to correct the chat width)
document.evaluate('/html/body/div[6]/div[3]/div[2]/div/div/main',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "height: 100vh");

// We define the correct width of the chat 
document.evaluate('/html/body/div[6]/div[3]/div[2]/div/div/main',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "width: 170vh");

// // Doing a better chat height
// $$('#messaging .scaffold-layout__content')[0].setAttribute('style', 'display: unset');
// $$('#main')[0].setAttribute('style', 'height: 100vh');

// Remove inecessary Premium link
document.evaluate('/html/body/div[6]/header/div/nav/ul/li[8]/div',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "display: none");

// Remove For Bussines button into the uppon right corner
document.evaluate('/html/body/div[6]/header/div/nav/ul/li[7]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "display: none");

// Remove unecessary primary chat header with all those unecessary filters
document.evaluate('/html/body/div[6]/div[3]/div[2]/div/div/main/div/div[1]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "display: none");

// Remove unecessary primary search bar
document.evaluate('/html/body/div[6]/header/div/div',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "display: none");

// Remove unecessary secondary search bar
document.evaluate('/html/body/div[6]/div[3]/div[2]/div/div/main/div/div[1]/div[1]/div[1]/div',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "display: none");

// // Remove messages filter
// document.querySelectorAll(".msg-conversations-container__title-row").forEach(Element => {
//     Element.remove();});

// // Remove all the config setting in each conversation card
// document.querySelectorAll(".msg-conversation-card__inbox-shortcuts").forEach(Element => {
//     Element.remove();})

