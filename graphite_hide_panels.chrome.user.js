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

// had to use a timer for slow raspberry pi
window.__graphite_hide_panel_interval = window.setInterval(function(){
	var kill_timer = function(){
		window.clearInterval( window.__graphite_hide_panel_interval );
	}
	// top nav
	var elements = document.getElementsByClassName("x-layout-mini-north");
	if ( elements.length > 0 ) kill_timer();
	for ( var i=0; i<elements.length; i++ ) elements[i].click();
	// left tree nav
	elements = document.getElementsByClassName("x-layout-mini-west");
	if ( elements.length > 0 ) kill_timer();
	for ( var i=0; i<elements.length; i++ ) elements[i].click();
}, 1000);

