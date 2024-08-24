// ==UserScript==
// @name        F*ck Poringa
// @namespace   Violentmonkey Scripts
// @match       https://www.poringa.net/chat/*
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Improve chat page
 
// @inject-into document
// @noframes
// ==/UserScript==

// ██████╗ ██╗     ██████╗██╗  ██╗ █████╗ ████████╗
// ██╔══██╗██║    ██╔════╝██║  ██║██╔══██╗╚══██╔══╝
// ██████╔╝██║    ██║     ███████║███████║   ██║   
// ██╔═══╝ ╚═╝    ██║     ██╔══██║██╔══██║   ██║   
// ██║     ██╗    ╚██████╗██║  ██║██║  ██║   ██║   
// ╚═╝     ╚═╝     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   

// ###############################################################################
// #                             Elements Modifications                          #
// ###############################################################################

// Header Banner
let XPathForm   = "/html/body/div/div[2]/nav";
let FormElement = document.evaluate(XPathForm, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

FormElement.remove()

// Full chat
let XPathChat   = "/html/body/div";
let ChatElement = document.evaluate(XPathChat, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

ChatElement.style.setProperty('margin-top', '0px', 'important');

