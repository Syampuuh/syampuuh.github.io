// ==UserScript==
// @name         Twitch Live Timestamp Grabber
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button to Twitch streams to copy the live stream timestamp in XhXXmXXs format, mainly for use with my Bingo page thing
// @author       Shampooh
// @namespace    https://x.com/siampuu
// @downloadURL  https://raw.githubusercontent.com/Syampuuh/syampuuh.github.io/refs/heads/master/twitchTimestamper.js
// @updateURL    https://raw.githubusercontent.com/Syampuuh/syampuuh.github.io/refs/heads/master/twitchTimestamper.js
// @match        https://www.twitch.tv/*
// @grant        GM_setClipboard
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function insertButton() {
        const panel = document.querySelector('.theatre-social-panel');
        if (!panel || document.getElementById('tm-ts-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'tm-ts-btn';
        btn.innerText = 'Get Timestamp';
        btn.className = 'ScCoreButton-sc-ocjdkq-0 khjbBN';
        btn.style.marginLeft = '8px';
        btn.addEventListener('click', () => {
            // Find the live time display; this seems to still exist with FFZ just hidden, hopefully other extensions don't break that lol
            const liveSpan = document.querySelector('.live-time span[aria-hidden="true"]');
            if (!liveSpan) {
                alert('Live time not found.');
                return;
            }
            const raw = liveSpan.innerText.trim();   // format H:MM:SS or M:SS
            const parts = raw.split(':').map(n => parseInt(n,10));
            let h=0, m=0, s=0;
            if (parts.length === 3) [h, m, s] = parts;
            else if (parts.length === 2) [m, s] = parts;
            else if (parts.length === 1) [s] = parts;
            const ts = `${h}h${String(m).padStart(2,'0')}m${String(s).padStart(2,'0')}s`;

            if (typeof GM_setClipboard === 'function') {
                GM_setClipboard(ts);
                //alert(`Copied timestamp: ${ts}`); //on second thought pop ups kind of sucks when trying to actually watch a stream actually
            } else if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(ts)
                    .then(() => alert(`Copied timestamp: ${ts}`))
                    .catch(() => prompt('Copy timestamp:', ts));
            } else {
                prompt('Copy timestamp:', ts);
            }
        });

        panel.appendChild(btn);
    }

    // Observe DOM for panel insertion
    const observer = new MutationObserver(insertButton);
    observer.observe(document.body, { childList: true, subtree: true });

    insertButton();
})();
