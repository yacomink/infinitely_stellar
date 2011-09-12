// ==UserScript==
// @name Infinite Stellar.io
// @namespace	https://github.com/metavida/infinite_stellario
// @description Adds infinite scrolling to all stallar.io flows.
// @version 0.2
// @creator  Marcos Wright-Kuhns
// @include http://stellar.io/*
// ==/UserScript==

// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://www.greasespot.net/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// --------------------------------------------------------------------

var $;

function GM_wait(callback) {
  if (typeof unsafeWindow.jQuery == 'undefined') {
    window.setTimeout(GM_wait, 100);
  } else {
    $ = unsafeWindow.jQuery;
    callback();
  }
}

GM_wait(