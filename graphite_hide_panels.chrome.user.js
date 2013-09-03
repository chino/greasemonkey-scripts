// ==UserScript==
//
// @name            Graphite - Hide panel by default
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Hides the graphite dashboard panel.
// @include         *graphite*dashboard*
//
// ==/UserScript==
//

// top nav
var elements = document.getElementsByClassName("x-layout-mini-north");
for ( var i=0; i<elements.length; i++ ) elements[i].click();

// left tree nav
elements = document.getElementsByClassName("x-layout-mini-west");
for ( var i=0; i<elements.length; i++ ) elements[i].click();
