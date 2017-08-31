/*
Copyright - 2017 - Christian Guyette - Contact: http//www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the 
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

( function ( ){
	
	'use strict';
	
	var _Translator = require ( './Translator' ) ( );

	var _ItineraryNotesDiv = null;

	var getItineraryNotesUI = function ( ) {
		
		var _CreateItineraryNotesUI = function ( ) {
			
			var htmlElementsFactory = require ( './HTMLElementsFactory' ) ( ) ;

			_ItineraryNotesDiv = htmlElementsFactory.create ( 'div', { id : 'TravelControl-ItineraryNotesDiv', className : 'TravelControl-Div'} );

		};

		if ( ! _ItineraryNotesDiv ) {
			_CreateItineraryNotesUI ( );
		}

		return {
			get UI ( ) { return _ItineraryNotesDiv; }
		};
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = getItineraryNotesUI;
	}

}());
	