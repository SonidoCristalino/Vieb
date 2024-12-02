
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

// # ===============================================
// # Function for remove items 
// # ===============================================

// Common selector part
const commonSelector = "/html/body/div[6]/div[3]/div[2]/div/div/main/div/div[2]/div[1]/div[2]/ul/li";

// Remove first ten config setting icon in each conversation card. 
// This is for select the right chat conversation without vision problem. 
for (let i = 2; i <= 10; i++) {
    const selector = `${commonSelector}[${i}]/div/div[2]`;
    const element = document.evaluate(selector, document, null, 
        XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.remove();
    }
}

