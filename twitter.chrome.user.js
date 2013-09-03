// ==UserScript==
//
// @name            Twitter - Nuke User Recommendations
// @author          Daniel Aquino
// @namespace       https://github.com/chino
// @description     Hides the sidebar recommendations (can't use jquery because of chrome)
// @include         *twitter.com*
//
// ==/UserScript==
//
if(typeof __right_side_remover == 'undefined')
{
	__right_side_remover = setInterval(function(){

		var remove_element = function( e )
			{ e.parentNode.removeChild(e); }

		// we don't want to continue to set styles over and over
		// because then you get visual artifacts like jiggling input area..
		// also we want to append styles not overwrite in case something is there already
		// so this will check if the style exists there and if not add it
		var append_style = function( e, styles )
		{
			var result = e.getAttribute('style') || "";
			var adding = styles.split(';');
			for(var i=0; i<adding.length; i++)
			{
				if(result.indexOf(adding[i]+";") == -1)
					result += adding[i] + ";";
			}
			e.setAttribute('style', result);
		}

		var remove_by_data_component_term = function( terms )
		{
			var elements = document.getElementsByClassName('component');
			for( var i=0; i<elements.length; i++ )
				for( var x=0; x<terms; x++ )
					if( elements[i].getAttribute('data-component-term') == terms[x] )
						remove_element(elements[i]);
		}

		var remove_by_class = function( names )
		{
			for( var i=0; i<names.length; i++ )
			{
				var elements = document.getElementsByClassName(names[i]);
				for( var x=0; x<elements.length; x++ )
					remove_element(elements[x]);
			}
		}

		var append_style_to_elements_by_class = function( names, styles )
		{
			for(var i=0; i<names.length; i++)
			{
				var elements = document.getElementsByClassName(names[i]);
				for( var x=0; x<elements.length; x++)
					append_style( elements[x], styles );
			}	
		}

		//
		// 
		//

		// looks like changed this
		// remove_by_data_component_term( ['user_recommendations','trends','footer'] );

		// this should now work but I kinda like these things now and rather i just resize and tweak them below
		// remove_by_class( ['site-footer', 'trends' ] );

		// this removes the friend suggestions again
		remove_by_class( ['wtf-module'] );

		append_style_to_elements_by_class( ['dashboard','content-main'], "float:left; width:100%;" );
		append_style_to_elements_by_class( ['js-profile-summary','js-profile-stats-container'], "float:left;" );
		append_style_to_elements_by_class( ['js-trend-item'], "float:left; margin-right:1em;" );
		append_style_to_elements_by_class( ['tweet-button-container'], "clear:both;" );
		append_style_to_elements_by_class( ['tweet-box'], "width:90%;" );

	}, 1000 );
	// 100);
}
