// ==UserScript==
//
// @name            Auto Scroll for Freenode Web Chat
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @include         https://webchat.freenode.net/*
// @include         http://webchat.freenode.net/*
//
// ==/UserScript==
//

console.log("Loading auto scroll plugin for freenode web chat");
window.__waiting_for_input_area__ = window.setInterval(function(){

	// the input area in the web chat ui
	var input_area = document.getElementsByClassName("dynamicpanel qwebirc-qui bottomboundpanel widepanel input");
	var chat_area = document.getElementsByClassName("dynamicpanel qwebirc-qui leftboundpanel lines ircwindow");

	// have to wait for the user to login and get the UI fully built out
	// after that we don't need this wrapper setInterval anymore
	if(input_area[0] && chat_area[0])
		window.clearInterval(window.__waiting_for_input_area__);
	else
		return;

	// create the scroll checkbox
	var d = document.createElement("input");
	d.type = "checkbox";
	d.style.float = "right";
	d.style.margin = "margin:0 0.4em;";
	input_area[0].insertBefore(d,input_area[0].firstChild);

	// shrink the keyboard input area so it can fit our checkbox next to it
	document.getElementsByClassName("keyboard-input")[0].style.maxWidth = "95%";

	// setup the event handler for when we click the checkbox
	d.onclick = function()
	{
	  if ( ! this.checked ) // window.__chat_area_scroller__ )
	  {
	    console.log("disabling window scroll interval = "+window.__chat_area_scroller__);
	    window.clearInterval(window.__chat_area_scroller__);
	    window.__chat_area_scroller__ = undefined;
	  }
	  else
	  {
	    window.__chat_area_scroller__ = window.setInterval(function(){
	      chat_area[0].scrollTop = chat_area[0].scrollHeight;
	      console.log("scrolling chat window to: "+chat_area[0].scrollTop);
	    }, 500);
	    console.log("window scroll interval = "+window.__chat_area_scroller__);
	  }
	}

	// enable it by default
	d.click();

},10);
