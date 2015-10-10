// ==UserScript==
//
// @name            TransmissionBT Pauser
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Pauses Downloads Once Finished
// @include         *localhost:9091/transmission/web*
//
// ==/UserScript==
//
if(typeof ___updater == 'undefined')
{

  ___pauser = setInterval(function(){
    var seeders = document.getElementsByClassName('seeding');
    for (var i=0; i<seeders.length; i++)
    {
      if ( seeders[i].style.display == 'block' )
      {
        var parent = seeders[i].parentNode.parentNode;
        var link = parent.getElementsByTagName('a')[0];
        link.children[0].click(); // the child has the handler
      }
    }
  }, 1000);

}
