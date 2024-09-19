
 // ██████╗ ██████╗ ███████╗ █████╗ ███████╗██╗   ██╗    ███████╗ ██████╗ ██████╗ ██╗  ██╗
// ██╔════╝ ██╔══██╗██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝    ██╔════╝██╔═══██╗██╔══██╗██║ ██╔╝
// ██║  ███╗██████╔╝█████╗  ███████║███████╗ ╚████╔╝     █████╗  ██║   ██║██████╔╝█████╔╝ 
// ██║   ██║██╔══██╗██╔══╝  ██╔══██║╚════██║  ╚██╔╝      ██╔══╝  ██║   ██║██╔══██╗██╔═██╗ 
// ╚██████╔╝██║  ██║███████╗██║  ██║███████║   ██║       ██║     ╚██████╔╝██║  ██║██║  ██╗
 // ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝       ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

// ==UserScript==
// @name        F*ck Greasy Fork
// @namespace   Violentmonkey Scripts
// @match       https://greasyfork.org/en
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Improve a better search within Vieb shortcuts

// @inject-into document
// @noframes
// ==/UserScript==
 
// ###############################################################################
// #                             Elements Modifications                          #
// ###############################################################################

// DropDown Selector Language
let XPathDropDownSelector   = "/html/body/header/div/div[2]/div/form/select";
let DropDownSelectorElement = document.evaluate(XPathDropDownSelector, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

DropDownSelectorElement.style.display = "none";

// Sign-in link
let XPathSignIn   = "/html/body/header/div/div[2]/div/span/a";
let SignInElement = document.evaluate(XPathSignIn, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

SignInElement.style.display = "none";

