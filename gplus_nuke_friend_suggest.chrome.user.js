// ==UserScript==
//
// @name            Google Plus - Nuke Friend Suggest
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Remove the friend suggest box (can't use jquery because of chrome)
// @include         *plus.google.com*
//
// ==/UserScript==
//
if(typeof __friend_suggest_remover == 'undefined')
{
	__friend_suggest_remover = setInterval(function(){
		var elements = document.getElementsByClassName('Ee fP Ue q5');
		for ( var x=0; x<elements.length; x++ )
		{
			var e = elements[x];
			if(!e) break;
			if(e.getAttribute('guidedhelpid') != "friendsuggestions") break;
			e.parentNode.removeChild(e);
		}
	},1000);
}
