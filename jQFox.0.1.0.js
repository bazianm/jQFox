/* jQFox
*  by: Menachem Bazian, CPA (NY), CITP
*  Date: 1/27/2015 (initial development)
*  (c) Menachem Bazian, CPA (NY), CITP
*  Licensed under GPL open source license
*
*  This is a library of functions for JavaScript written as a jQuery plugin. The functions in this file mimic functions from Visual FoxPro 
*  (still, in my humble opinion, the best database programming language on the planet). It is intended to help developers migrating to 
*  the web from Visual FoxPro.
*
*  There are a ton of VFP functions so I am not going to do all of them (and not all of them are even applicable). I plan on doing those I need as
*  I need them. If you would like to contribute with a function, don't hesitate!
*/

(function($){
	$.between = function(compValue, lowValue, hiValue){
		var retVal = (compValue <= hiValue && compValue >=lowValue);
		return retVal;
	};
})(jQuery);