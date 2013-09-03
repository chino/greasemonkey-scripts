// ==UserScript==
//
// @name            Facebook - Nuke Right Side
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Hides the sidebar and resizes the center (can't use jquery because of chrome)
// @include         *facebook.com*
//
// ==/UserScript==
//
if(typeof __right_side_remover == 'undefined')
{
	__right_side_remover = setInterval(function(){
		var col = document.getElementById('rightCol');
		if (col)
			col.parentNode.removeChild(col);
		var center = document.getElementById('contentArea');
		if (center)
			center.setAttribute('style','width:97%;');
	},100);
}
