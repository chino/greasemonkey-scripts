// ==UserScript==
//
// @name            Destiny LFG Refresher
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Clicks Refresh and Update Gaurdian button repeatedly
// @include         *destinylfg.com*
//
// ==/UserScript==
//
if(typeof ___updater == 'undefined')
{

  // refresh the list
  ___refresher = setInterval(function(){
    var e = document.getElementById('refresh');
    if(e && e.click)
    {
      e.click();
      console.log("refreshing Gaurdian list");
    }
    else
    {
      console.log("no #refresh button?");
    }
  }, 60 * 1000);

  // update the listed gaurdian
  ___updater = setInterval(function(){
    var e = document.getElementById('updateMe');
    if(e && e.click && e.style.display == "block")
    {
      e.click();
      document.getElementById('updateMeForm').click();
      console.log("updating Gaurdian listing");
    }
    else
    {
      //console.log("no #updateMe button?");
    }
  }, 60 * 1000);

}

/*
  window.__timer = window.setInterval(function(){ $('#updateMe').click(); $('#updateMeForm').click(); },60000)
  
  window.__timer_refresh = window.setInterval(function(){ $('#refresh').click(); },10000)
*/
