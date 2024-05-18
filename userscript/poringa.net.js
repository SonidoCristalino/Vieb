// ==UserScript==
// @name        F*ck Banner Poringa
// @namespace   Violentmonkey Scripts
// @match       https://www.poringa.net/*
// @grant       none
// @version     1.0
// @author      Me
// @license     MIT
// @description Delete sidebar banner from main page
 
// ==/UserScript==

// Remove right banner 
document.querySelector("#page > div:nth-child(4) > div > aside").remove();

// Remove top banner 
document.querySelector("#page > div:nth-child(4) > div > main > section.content-right.cf > div.hook.cam4").remove();

// Remove mid banner 
document.querySelector("#page > div:nth-child(4) > div > main > section.content-right.cf > div.hook.home-center-trends > ins").remove();

// Increase margins to better view the main page
document.querySelector("#page > div:nth-child(4) > div > main").setAttribute("style", "margin-right: 10px");
