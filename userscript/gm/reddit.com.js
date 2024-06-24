// ==UserScript==
// @name         Clean Reddit
// @namespace    http://tampermonkey.net/
// @version      0.12
// @description  Remove some annoying things
// @author       Me
// @license      MIT
// @match        https://*.reddit.com/*
// @icon         https://reddit.com/favicon.ico
// @grant        none
// ==/UserScript==

// Remove right panel at the beginning
document.querySelector("#right-sidebar-container").setAttribute("style", "display: none");

// Increase max width in every post
document.querySelector("#main-content").setAttribute("style", "max-width: none");

// Use a function to set or unset sidebar visibility
(function() {
    'use strict';

    var sidebar        = document.querySelector("#right-sidebar-container");
    var sticky_sidebar = document.querySelector('div[data-testid="search-results-sticky-sidebar"]');
    var visible        = false;

    function alternateVisibility() {
        
        if (sidebar) {
            sidebar.style.display = visible ? "none" : "";
        }

        if (sticky_sidebar) {
            sticky_sidebar.style.display = visible ? "none" : "";
        }
        
        visible = !visible;
    }

    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.shiftKey && event.key === 'M') {
            alternateVisibility();
        }
    });

})();
