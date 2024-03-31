// ==UserScript==
// @name        f*ck linkedin messages
// @namespace   Violentmonkey Scripts
// @match       https://www.linkedin.com/messaging/*
// @grant       none
// @version     1.0
// @author      -
// @description 29/03/2024 3:20:07 PM
// @license     MIT
// ==/UserScript==
 
(function() {
    'use strict';    
    // document.getElementById('main').remove();    
    // Delete all the non-using element 
    document.querySelector("#global-nav > div > nav > ul > li:nth-child(1)").remove();
    document.querySelector("#global-nav > div > nav > ul > li:nth-child(4)").remove();
    document.querySelector("#main > div > div:nth-child(1) > div:nth-child(1)").remove();
    document.querySelector("#main > div > div:nth-child(1) > div").remove();
    document.querySelector("#messaging > div > div > aside").remove();
    document.querySelector("#global-nav-search > div").remove();
    // document.querySelector("").remove();
})();

