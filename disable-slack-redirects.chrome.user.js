// ==UserScript==
//
// @name            Slack - Disable slack redirects
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Kill delay from slack link tracking
// @include         *slack.com*
//
// ==/UserScript==
//
if(typeof __slack_rewriter == 'undefined')
{
        __slack_rewriter = setInterval(function(){
                document.
                querySelectorAll('a[onclick*=slack-redir]').
                forEach(function(link){
                        console.log('Disabling slack redirect for: '+link.href)
                        // chrome uses a separate javascript execution environment for extensions
                        // hence we need to completely rebuild the DOM to remove the javascript events
                        // see: https://developer.chrome.com/extensions/content_scripts
                        link.removeAttribute('onclick')
                        link.removeAttribute('onmouseover')
                        link.parentElement.innerHTML = link.parentElement.innerHTML
                })
        }, 1000 );
}
