// ==UserScript==
//
// @name            Gmail - Expand email.
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Removes right pane (with adds) when reading an email. (can't use jquery because of chrome)
// @include         *mail.google.com*
//
// ==/UserScript==
//
if(typeof __add_remover == 'undefined')
{
	__add_remover = setInterval(function(){
		// this is the element with the adds
		var elements = document.getElementsByClassName('u5 aoh');
		for ( var x=0; x<elements.length; x++ )
		{
			// climb up the tree until we reach a table cell
			var p = elements[x].parentNode;
			if(!p) break;
			while( p.nodeName != 'TD' )
			{
				p = p.parentNode;
				if(!p) break;
			}
			if(!p) break;
			// remove the table cell completely
			// leaving only the email column left over
			p.parentNode.removeChild(p);
		}
	},1000);
}
