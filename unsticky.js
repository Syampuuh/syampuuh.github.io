// ==UserScript==
// @name         Unsticky Twitter Header
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  unsticks the twitter header
// @author       Shampooh
// @run-at       document-idle
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/Syampuuh/syampuuh.github.io/master/unsticky.js
// @downloadURL  https://raw.githubusercontent.com/Syampuuh/syampuuh.github.io/master/unsticky.js
// ==/UserScript==

GM_addStyle ( `
    .r-gtdqiz {
    position: initial !important;
    }
` );
