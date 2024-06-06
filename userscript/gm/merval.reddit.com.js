// ==UserScript==
// @name         Clean Reddit
// @namespace    http://tampermonkey.net/
// @version      0.12
// @description  Remove some annoying things
// @author       Me
// @license      MIT
// @match        https://*.reddit.com/r/merval/*
// @icon         https://reddit.com/favicon.ico
// @grant        none
// ==/UserScript==

// Remove right panel
document.querySelector("#right-sidebar-container").remove();

// Increase max width in post
document.querySelector("#main-content")
    .setAttribute("style", "max-width: none");
