// ==UserScript==
// @name         YouTube Live Auto Real-Time
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically return to real-time in YouTube Live
// @author       You
// @match        *://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        // ライブバッジ要素を取得
        let liveBadge = document.querySelector('.ytp-live-badge');

        // disabled 属性が無い場合、自動でクリックしてリアルタイムに戻る
        if (liveBadge && !liveBadge.disabled) {
            liveBadge.click();  // ボタンをクリックしてリアルタイムに戻る
        }
    }, 10);
})();
