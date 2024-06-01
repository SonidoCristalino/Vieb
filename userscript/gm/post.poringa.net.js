// ==UserScript==
// @name        F*ck Banner Poringa
// @namespace   Violentmonkey Scripts
// @match       http://www.poringa.net/posts/*
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Improve a better view in post pages
 
// ==/UserScript==

// Remove right banner 
document.querySelector("#page > div:nth-child(4) > div > div").remove();

// Decrease margins to better view in post page
document.querySelector("#page > div:nth-child(4) > div > main > div.container-post > div.container-post__inner")
    .setAttribute("style", "margin-right: -200px");
