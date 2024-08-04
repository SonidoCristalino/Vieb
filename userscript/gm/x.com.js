// ==UserScript==
// @name         F*ck Twitter
// @namespace    http://tampermonkey.net/
// @version      0.12
// @description  Remove some annoying things from Twitter page
// @author       Me
// @license      MIT
// @match        https://x.com/search*
// @grant        none

// @inject-into document
// @noframes
// ==/UserScript==

// ████████╗██╗    ██╗██╗████████╗████████╗███████╗██████╗ 
// ╚══██╔══╝██║    ██║██║╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
//    ██║   ██║ █╗ ██║██║   ██║      ██║   █████╗  ██████╔╝
//    ██║   ██║███╗██║██║   ██║      ██║   ██╔══╝  ██╔══██╗
//    ██║   ╚███╔███╔╝██║   ██║      ██║   ███████╗██║  ██║
//    ╚═╝    ╚══╝╚══╝ ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝

// ###############################################################################
// #                             Elements Modifications                          #
// ###############################################################################

// Left Column
let XPathLeftPanel   = "/html/body/div[1]/div/div/div[2]/header";
let LeftPanelElement = document.evaluate(XPathLeftPanel, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

LeftPanelElement.style.display = "none";

// Central Panel
let XPathCentralPanel = "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]";
let CentralElement    = document.evaluate(XPathCentralPanel, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

CentralElement.style.maxWidth   = "none";
CentralElement.style.marginLeft = "240px";
    
// ###############################################################################
// #                                 Functions                                   #
// ###############################################################################

// Right Panel
let XPathRightPanel   = "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]";
let RightPanelElement = document.evaluate(XPathRightPanel, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// At the beginning unset Right Panel visibility 
RightPanelElement.style.display = "none";

// Use a function to set or unset Right Panel visibility
(function() {
    'use strict';

    var visible = false;

    function alternarVisibilidad() {
        if (visible) {
            RightPanelElement.style.display = "none";
        } else {
            RightPanelElement.style.display = ""; 
        }
        visible = !visible;
    }

    // Add shortkey to set visibility
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.shiftKey && event.key === 'M') {
            alternarVisibilidad();
        }
    });

})();
