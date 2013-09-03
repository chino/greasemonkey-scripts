// ==UserScript==
//
// @name            Autocomplete On
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Enable auto complete on all forms
// @include         *
//
// ==/UserScript==
//
if(typeof __autocomplete_on == 'undefined')
{
	__autocomplete_on = setInterval(function(){

		for(var i = 0; i < document.forms.length; i++ )
			document.forms[i].setAttribute('autocomplete','on');

	}, 1000 );
}
