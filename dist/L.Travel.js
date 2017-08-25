(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


(function() {
	
	'use strict';
	
	var _ObjName = 'Geom';
	var _ObjVersion = '1.0.0';

	var getGeom = function ( ) {
		
		var _Pnts ="";
		var _Precision = 6;
		var _Color = "#000000";
		var _Weight = 5;
		
		var _ObjId = -1;
		
		return {

			get pnts ( ) { return _Pnts; },
			set pnts ( Pnts ) { _Pnts = Pnts; },
			
			get precision ( ) { return _Precision; },
			set precision ( Precision ) { _Precision = Precision; },
			
			get color ( ) { return _Color; },
			set color ( Color ) { _Color = Color; },
			
			get weight ( ) { return _Weight; },
			set weight ( Weight ) { _Weight = Weight; },
			
			get objId ( ) { return _ObjId; },
			get objName ( ) { return _ObjName; },
			get objVersion ( ) { return _ObjVersion; },
			
			get object ( ) {
				return {
					pnts : _Pnts,
					precision : _Precision,
					color : _Color,
					weight : _Weight,
					objId : _ObjId,
					objName : _ObjName,
					objVersion : _ObjVersion
				};
			},
			set object ( Object ) {
				if ( ! Object.objVersion ) {
					throw 'No ObjVersion for Geom';
				}
				if ( '1.0.0' !== Object.objVersion ) {
					throw 'invalid objVersion for Geom';
				}
				if ( ! Object.objName ) {
					throw 'No objName for Geom';
				}
				if ( 'Geom' !== Object.objName ) {
					throw 'Invalid objName for Geom';
				}
				_Pnts = Object.pnts || '';
				_Precision = Object.precision || 6;
				_Color = Object.color || '#000000';
				_Weight = Object.weight || 5;
				_ObjId = require ( './ObjId' ) ( );
			}
		};
	};
	
	/* --- End of getTravelData function --- */
	
	/* 
	--- Exports ------------------------------------------------------------------------------------------------------------
	*/
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = getGeom;
	}

} ) ( );

/* --- End of MapData.js file --- */
},{"./ObjId":6}],2:[function(require,module,exports){
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
	
	/* 
	--- HTMLElementsFactory object -----------------------------------------------------------------------------
	
	Patterns : Closure
	------------------------------------------------------------------------------------------------------------------------
	*/

	var getHTMLElementsFactory = function ( ) {

		return {
			create : function ( TagName, Properties, Parent ) {
				var Element;
				if ( 'text' === TagName.toLowerCase ( ) ) {
					Element = document.createTextNode ( '' );
				}
				else {
					Element = document.createElement ( TagName );
				}
				if ( Parent ) {
					Parent.appendChild ( Element );
				}
				if ( Properties )
				{
					for ( var prop in Properties ) {
						try {
							Element [ prop ] = Properties [ prop ];
						}
						catch ( e ) {
							console.log ( "Invalid property : " + prop );
						}
					}
				}
				return Element;
			}
			
		};
			
	};

	
	/* --- End of L.Travel.ControlUI object --- */		

	var HTMLElementsFactory = function ( ) {
		return getHTMLElementsFactory ( );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = HTMLElementsFactory;
	}

}());

},{}],3:[function(require,module,exports){
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
	
	L.Travel = L.Travel || {};
	L.travel = L.travel || {};
	
	L.Travel.Control = L.Control.extend ( {
		
			options : {
				position: 'topright'
			},
			
			initialize: function ( options ) {
					L.Util.setOptions( this, options );
			},
			
			onAdd : function ( Map ) {
				return require ('./L.Travel.ControlUI' ) ( Map );
			}
		}
	);

	L.travel.control = function ( options ) {
		return new L.Travel.Control ( options );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = L.travel.control;
	}

}());

},{"./L.Travel.ControlUI":4}],4:[function(require,module,exports){
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
	
	L.Travel = L.Travel || {};
	L.travel = L.travel || {};

	var _Map; // A reference to the map

	/* 
	--- L.Travel.ControlUI object -----------------------------------------------------------------------------
	
	This object build the control contains
	
	Patterns : Closure
	------------------------------------------------------------------------------------------------------------------------
	*/
	var RoutesList = null;
	var wayPointsList = null;
	
	var onClickDeleteRouteBtn = function ( clickEvent ) {
		RoutesList.removeAllItems ( );
	};
	var onClickAddRouteBtn = function ( clickEvent ) {
		RoutesList.addItem ( );
	};

	L.Travel.getControlUI = function ( ) {
		this.setTravelData = function ( travelData ) {
			var routes = travelData.routes;
			for ( var routesCounter = 0; routesCounter < routes.length; routesCounter ++ ) {
				routes [ routesCounter ].uiObjId = RoutesList.addItem ( routes [ routesCounter ].name, routes [ routesCounter ].objId );
			}
			var myMap = new Map ( );
		};
		this.createUI = function ( ){ 
			var HTMLElementsFactory = require ( './HTMLElementsFactory' ) ( ) ;
			var sortableList = require ( './SortableList' );
			
			this.MainDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-MainDiv' } );

			var routesDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-RoutesDiv'}, this.MainDiv );
			HTMLElementsFactory.create ( 'h3', { innerHTML : 'Routes&nbsp;:'}, routesDiv );
			RoutesList = sortableList ( { minSize : 0, placeholder : 'Route' }, routesDiv );
			
			var routesButtonsDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-routesButtonsDiv'}, routesDiv );
			var addRouteBtn = HTMLElementsFactory.create ( 'span', { id : 'TravelControl-addRoutesBtn', className: 'TravelControl-btn', innerHTML : '+'/*'&#x2719;'*/}, routesButtonsDiv );
			addRouteBtn.addEventListener ( 'click' , onClickAddRouteBtn, false );

			var deleteRouteBtn = HTMLElementsFactory.create ( 'span', { id : 'TravelControl-deleteRoutesBtn', className: 'TravelControl-btn', innerHTML : '&#x1f5d1;'}, routesButtonsDiv );
			deleteRouteBtn.addEventListener ( 'click' , onClickDeleteRouteBtn, false );
					
			var wayPointsDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-WayPointsDiv'}, this.MainDiv );
			HTMLElementsFactory.create ( 'h3', { innerHTML : 'Points de passage&nbsp;:' }, wayPointsDiv );
			wayPointsList = sortableList ( { minSize : 0, listType : 1, placeholders : [ 'Start', 'Via', 'End' ], texts : [ 'A', 'index', 'B' ]  }, wayPointsDiv );

			var wayPointsButtonsDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-wayPointsButtonsDiv'}, wayPointsDiv );
			var addWayPointsBtn = HTMLElementsFactory.create ( 'span', { id : 'TravelControl-addWayPointsBtn', className: 'TravelControl-btn', innerHTML : '+'/*'&#x2719;'*/}, wayPointsButtonsDiv );
			var reverseWayPointsBtn = HTMLElementsFactory.create ( 'span', { id : 'TravelControl-reverseWayPointsBtn', className: 'TravelControl-btn', innerHTML : '&#x21C5;'}, wayPointsButtonsDiv );
			var deleteWayPointsBtn = HTMLElementsFactory.create ( 'span', { id : 'TravelControl-deleteWayPointsBtn', className: 'TravelControl-btn', innerHTML : '&#x1f5d1;'}, wayPointsButtonsDiv );

			var itineraryDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-ItineraryDiv'}, this.MainDiv );

			HTMLElementsFactory.create ( 'h3', { innerHTML : 'Itinéraire&nbsp;:' }, itineraryDiv );
			var errorDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-ItineraryDiv'}, this.MainDiv );
		};

		this.createUI ( );
		var travelData = require ( './TravelData' ) ( );
		this.setTravelData ( travelData );
		
		return this.MainDiv;

	};

	
	/* --- End of L.Travel.ControlUI object --- */		

	L.travel.ControlUI = function ( ) {
		return L.Travel.getControlUI ( );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = L.travel.ControlUI;
	}

}());

},{"./HTMLElementsFactory":2,"./SortableList":8,"./TravelData":9}],5:[function(require,module,exports){
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
	
	L.Travel = L.Travel || {};
	L.travel = L.travel || {};
	
	/* 
	--- L.Travel.Interface object -----------------------------------------------------------------------------
	
	This object contains all you need to use Travel :-)
	
	Patterns : Closure
	------------------------------------------------------------------------------------------------------------------------
	*/

	L.Travel.getInterface = function ( ) {

		var TravelData = require ( './TravelData' ) ( );
		TravelData.object =
		{
			name : "TravelData sample",
			routes : 
			[
				{
					name : "Chemin du Sârtê",
					wayPoints : 
					[
						{
							name : "Chemin du Sârtê 1 - Anthisnes",
							lat : 50.50881,
							lng : 5.49314,
							objId : -1,
							objName : "WayPoint",
							objVersion : "1.0.0"
						},
						{
							name : "Chemin du Sârtê 22 - Anthisnes",
							lat : 50.50937,
							lng : 5.49470,
							objId : -2,
							objName : "WayPoint",
							objVersion : "1.0.0"
						}
					],
					geom :
					{
						pnts : "w~xi_BwwgnIaHkLgIkUmEyTcLie@",
						precision :6,
						color : "#0000ff",
						weight : "5",
						objId : -3,
						objName : "Geom",
						objVersion : "1.0.0"
					},
					objId : -4,
					objName : "Route",
					objVersion : "1.0.0"
				}
			],
			objId : -5,
			objName : "TravelData",
			objVersion : "1.0.0"
		};
		
		//TravelData.clear ( );

/*
		TravelData.object = 
		{
			name : "A",
			routes : 
			[
				{
					name : "B",
					wayPoints : 
					[
						{
							name : "C",
							lat : 0,
							lng : 0,
							objId : -1,
							objName : "WayPoint",
							objVersion : "1.0.0"
						},
						{
							name : "D",
							lat : 0,
							lng : 0,
							objId : -2,
							objName : "WayPoint",
							objVersion : "1.0.0"
						}
					],
					geom :
					{
						pnts : "E",
						precision :6,
						color : "#000000",
						weight : "5",
						objId : -3,
						objName : "Geom",
						objVersion : "1.0.0"
					},
					objId : -4,
					objName : "Route",
					objVersion : "1.0.0"
				}
			],
			objId : -5,
			objName : "TravelData",
			objVersion : "1.0.0"
		};
*/
		return {

			/* --- public methods --- */
			
			/* addControl ( ) method --- 
			
			This method add the control 
			
			Parameters :
			
			*/

			addControl : function ( Map, options ) {
				if ( typeof module !== 'undefined' && module.exports ) {
					Map.addControl ( require ('./L.Travel.Control' ) ( options ) );
				}
				else {
					Map.addControl ( L.marker.pin.control ( options ) );
				}
			},
			
			addWayPoint : function ( WayPoint, WayPointPosition ) {
				console.log ( 'addWayPoint' );
			},
			
		};
	};
	
	/* --- End of L.Travel.Interface object --- */		

	L.travel.interface = function ( ) {
		return L.Travel.getInterface ( );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = L.travel.interface;
	}

}());

},{"./L.Travel.Control":3,"./TravelData":9}],6:[function(require,module,exports){
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


(function() {
	
	'use strict';

	var _ObjId = 0;
	
	var getObjId = function ( ) {
		return ++ _ObjId;
	};
	
	/* --- End of getTravelData function --- */
	
	/* 
	--- Exports ------------------------------------------------------------------------------------------------------------
	*/
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = getObjId;
	}

} ) ( );

/* --- End of MapData.js file --- */
},{}],7:[function(require,module,exports){
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


(function() {
	
	'use strict';

	var _ObjName = 'Route';
	var _ObjVersion = '1.0.0';

	var getRoute = function ( ) {
		
		var _Name = '';
		var _WayPoints = [];
		var _Geom = {};
		
		var _ObjId = -1;
		var _UIObjId = -1;
		
		return {
			get name ( ) { return _Name; },
			set name ( Name ) { _Name = Name;},
			
			addWayPoint : function ( WayPoint ) { _WayPoints.push ( WayPoint ); },
			removeWayPoint : function ( WayPointObjId ) { return; },

			get geom ( ) { return _Geom; },
			set geom ( Geom ) { _Geom = Geom; },
			
			get uiObjId ( ) { return _UIObjId; },
			set uiObjId ( UIObjId) { _UIObjId = UIObjId; },
			
			get objId ( ) { return _ObjId; },
			get objName ( ) { return _ObjName; },
			get objVersion ( ) { return _ObjVersion; },
			
			get object ( ) {
				var WayPoints = [];
				for ( var WayPointsCounter = 0; WayPointsCounter < _WayPoints.length ;WayPointsCounter ++ ) {
					WayPoints.push ( _WayPoints [ WayPointsCounter ].asObject );
				}
				return {
					name : _Name,
					wayPoints : _WayPoints,
					geom : _Geom,
					objId : _ObjId,
					objName : _ObjName,
					objVersion : _ObjVersion
				};
			},
			set object ( Object ) {
				if ( ! Object.objVersion ) {
					throw 'No ObjVersion for Route';
				}
				if ( '1.0.0' !== Object.objVersion ) {
					throw 'invalid objVersion for Route';
				}
				if ( ! Object.objName ) {
					throw 'No objName for Route';
				}
				if ( 'Route' !== Object.objName ) {
					throw 'Invalid objName for Route';
				}
				_Name = Object.name || '';
				for ( var WayPointsCounter = 0; WayPointsCounter < Object.wayPoints.length; WayPointsCounter ++ ) {
					var tmpWayPoint = require ( './WayPoint' ) ( );
					tmpWayPoint.object = Object.wayPoints [ WayPointsCounter ];
					_WayPoints.push ( tmpWayPoint.object );
				}
				var tmpGeom = require ( './Geom' ) ( );
				tmpGeom.object = Object.geom;
				_Geom = tmpGeom.object;
				_ObjId = require ( './ObjId' ) ( );
			}
		};
	};
	
	/* --- End of getTravelData function --- */
	
	/* 
	--- Exports ------------------------------------------------------------------------------------------------------------
	*/
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = getRoute;
	}

} ) ( );

/* --- End of MapData.js file --- */
},{"./Geom":1,"./ObjId":6,"./WayPoint":10}],8:[function(require,module,exports){
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
	
	
	var onDragStart = function  ( DragEvent ) {
		DragEvent.stopPropagation(); // needed to avoid map movements
		try {
			DragEvent.dataTransfer.setData ( 'Text', '1' );
		}
		catch ( e ) {
		}
		console.log ( 'onDragStart' );
	};
	
	var onDragOver = function ( DragEvent ) {
		DragEvent.preventDefault();
		console.log ( 'onDragOver' );
	};
	
	var onDrop = function ( DragEvent ) { 
		DragEvent.preventDefault();
		var data = DragEvent.dataTransfer.getData("Text");
		console.log ( 'onDrop' );
	};

	/*
	var onDragEnd = function ( DragEvent ) { 
		console.log ( 'onDragEnd' );
	};
	
	var onDragEnter = function ( DragEvent ) { 
		console.log ( 'onDragLeave' );
	};
	var onDragLeave = function ( DragEvent ) { 
		console.log ( 'onDragEnter' );
	};
	*/	
	
	
	/* 
	--- SortableList object --------------------------------------------------------------------------------------------------
	
	--------------------------------------------------------------------------------------------------------------------------
	*/

	var SortableList = function ( options, Parent ) {
		
		var onDeleteBtnClick = function ( ClickEvent ) {
			console.log ( 'onDeleteBtnClick' );
			console.log ( this );
			ClickEvent.stopPropagation();
		};
		
		var onUpArrowBtnClick = function ( ClickEvent ) {
			console.log ( 'onUpArrowBtnClick' );
			ClickEvent.stopPropagation();
		};
		
		var onDownArrowBtnClick = function ( ClickEvent ) {
			console.log ( 'onDownArrowBtnClick' );
			ClickEvent.stopPropagation();
		};
		
		var HTMLElementsFactory = require ( './HTMLElementsFactory' ) ( ) ;
		
		this.items = [];
		
		/*
		--- _setItemsClasses method --------------------------------------------------------------------------------------------

		This method ...

		------------------------------------------------------------------------------------------------------------------------
		*/
		
		this._setItemsClasses = function ( )
		{
			for ( var itemPosition = 0; itemPosition < this.items.length; itemPosition ++ ){
				
				var item = this.items [ itemPosition ];

				if ( item.classList.contains ( 'deleteBtn' ) ) {
					item.childNodes [ 2 ].removeEventListener ( 'click', onDeleteBtnClick, false );
				}
				if ( item.classList.contains ( 'upArrowBtn' ) ) {
					item.childNodes [ 3 ].removeEventListener ( 'click', onUpArrowBtnClick, false );
				}
				if ( item.classList.contains ( 'downArrowBtn' ) ) {
					item.childNodes [ 4 ].removeEventListener ( 'click', onDownArrowBtnClick, false );
				}

				var draggable = true;
				var deleteBtnClass = ' deleteBtn';
				var upArrowBtnClass = ' upArrowBtn';
				var downArrowBtnclass = ' downArrowBtn';
				var cursorClass = ' moveCursor';
				var placeholder = '';
				var itemName = '';
				if ( 0 === this.options.listType ) {
					placeholder = this.options.placeholder;
					if ( 0 === itemPosition ) {
						upArrowBtnClass = ' noUpArrowBtn';
					}
					if ( this.items.length === itemPosition + 1 ) {
						downArrowBtnclass = ' noDownArrowBtn';
					}
				}
				else if ( 1 === this.options.listType ) {
					placeholder = this.options.placeholders [ 1];
					itemName = itemPosition;
					if ( 0 === itemPosition ) {
						draggable = false;
						deleteBtnClass = ' noDeleteBtn';
						upArrowBtnClass = ' noUpArrowBtn';
						downArrowBtnclass = ' noDownArrowBtn';
						cursorClass = '';
						placeholder = this.options.placeholders [ 0];
						itemName = this.options.texts [ 0 ];
					}
					if ( 1 === itemPosition ) {
						upArrowBtnClass = ' noUpArrowBtn';
					}
					if ( this.items.length - 2 === itemPosition ) {
						downArrowBtnclass = ' noDownArrowBtn';
					}
					if ( this.items.length - 1 === itemPosition ) {
						draggable = false;
						deleteBtnClass = ' noDeleteBtn';
						upArrowBtnClass = ' noUpArrowBtn';
						downArrowBtnclass = ' noDownArrowBtn';
						cursorClass = '';
						placeholder = this.options.placeholders [ 2];
						itemName = this.options.texts [ 2 ];
					}
				}
				var className = 'SortableListItem' ;
				item.className = className + deleteBtnClass + upArrowBtnClass + downArrowBtnclass + cursorClass ;

				if ( item.classList.contains ( 'deleteBtn' ) ) {
					item.childNodes [ 2 ].addEventListener ( 'click', onDeleteBtnClick, false );
				}
				if ( item.classList.contains ( 'upArrowBtn' ) ) {
					item.childNodes [ 3 ].addEventListener ( 'click', onUpArrowBtnClick, false );
				}
				if ( item.classList.contains ( 'downArrowBtn' ) ) {
					item.childNodes [ 4 ].addEventListener ( 'click', onDownArrowBtnClick, false );
				}

				if ( item.draggable ) {
					item.removeEventListener ( 'dragstart', onDragStart, false );	
				}
				item.draggable = draggable;
				if ( draggable ) {
					item.addEventListener ( 'dragstart', onDragStart, false );	
				}
				item.firstChild.innerHTML = itemName;
				item.firstChild.nextSibling.placeholder = placeholder;
			}
		};
		
		/*
		--- removeItem method --------------------------------------------------------------------------------------------------

		This method ...

		------------------------------------------------------------------------------------------------------------------------
		*/
		
		this.removeItem = function ( ) {
			
			
			this._setItemsClasses ( );
		};
		
		/*
		--- removeAllItems method ----------------------------------------------------------------------------------------------

		This method ...

		------------------------------------------------------------------------------------------------------------------------
		*/

		this.removeAllItems = function ( ) {
			for ( var ItemCounter = 0; ItemCounter < this.items.length; ItemCounter ++ ) {
				this.Container.removeChild ( this.items [ ItemCounter ] );
			}
			this.items.length = 0;
		};
		
		/*
		--- moveItem method ----------------------------------------------------------------------------------------------------

		This method ...

		------------------------------------------------------------------------------------------------------------------------
		*/

		this.moveItem = function ( ) {
			this._setItemsClasses ( );
		};
		
		/*
		--- addItem method -----------------------------------------------------------------------------------------------------

		This method ...

		------------------------------------------------------------------------------------------------------------------------
		*/

		this.addItem = function ( name, objId ) {
	
			name = name || '';
			objId = objId || -1;
			
			var ItemContainer = HTMLElementsFactory.create ( 'div', { draggable : false   }, this.Container );

			HTMLElementsFactory.create ( 'span', { className : 'SortableListTextIndex' }, ItemContainer );
			HTMLElementsFactory.create ( 'input', { type : 'text', className : 'SortableListInput', value: name}, ItemContainer );
			HTMLElementsFactory.create ( 'span', { className : 'SortableListDeleteBtn', innerHTML : '&#x1f5d1;' }, ItemContainer );
			HTMLElementsFactory.create ( 'span', { className : 'SortableListUpArrowBtn', innerHTML : String.fromCharCode( 8679 ) }, ItemContainer );
			HTMLElementsFactory.create ( 'span', { className : 'SortableListDownArrowBtn', innerHTML : String.fromCharCode( 8681 ) }, ItemContainer );
			ItemContainer.dataObjId = objId; 
			ItemContainer.UIObjId = require ( './ObjId' ) ( );

			this.items.push ( ItemContainer );
			this._setItemsClasses ( );
					
			
			return ItemContainer.UIObjId;
		};
		
		
		/*
		--- _create method -----------------------------------------------------------------------------------------------------

		This method ...

		------------------------------------------------------------------------------------------------------------------------
		*/

		this._create = function ( options, Parent ) {

			// options
			
			// options.listType = 0 : all items can be sorted or deleted
			// options.listType = 1 : all items except first and last can be sorted or deleted
			
			this.options = { minSize : 2, listType : 0, placeholder : '', placeholders : [] , texts : [] } ;
			for ( var option in options ) {
				this.options [ option ] = options [ option ];
			}
			this.Container = HTMLElementsFactory.create ( 'div', { className : 'SortableListContainer' } );
			this.Container.addEventListener ( 'dragover', onDragOver, false );
			this.Container.addEventListener ( 'drop', onDrop, false );

			if ( Parent ) {
				Parent.appendChild ( this.Container );
			}
			
			for ( var ItemCounter = 0; ItemCounter < this.options.minSize; ItemCounter++ )
			{
				this.addItem ( );
			}
		};
		
		this._create ( options, Parent );
		
	};

	var sortableList = function ( options, Parent ) {
		return new SortableList ( options, Parent );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = sortableList;
	}

}());

},{"./HTMLElementsFactory":2,"./ObjId":6}],9:[function(require,module,exports){
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


(function() {
	
	'use strict';
	
	var _ObjName = 'TravelData';
	var _ObjVersion = '1.0.0';
	
	// one and only one object TravelData is possible
	
	var _Name = '';
	var _Routes = [ ];
	var _ObjId = -1;

	var getTravelData = function ( ) {
		
		return {
			clear : function ( ) {
				this.object = 
				{name : "",routes : [{name : "",wayPoints : [{name : "",lat : 0,lng : 0,objId : -1,objName : "WayPoint",objVersion : "1.0.0"},{name : "",lat : 0,lng : 0,objId : -1,objName : "WayPoint",objVersion : "1.0.0"}],geom :{pnts : "",precision :6,color : "#000000",weight : "5",objId : -1,objName : "Geom",objVersion : "1.0.0"},objId : -1,objName : "Route",objVersion : "1.0.0"}],objId : -1,objName : "TravelData",objVersion : "1.0.0"};
			},

			get routes ( ) { return _Routes; },
			get objId ( ) { return _ObjId; },
			get objName ( ) { return _ObjName; },
			get objVersion ( ) { return _ObjVersion; },

			get object ( ) {
				var Routes = [];
				for ( var RoutesCounter = 0; RoutesCounter < _Routes.length ;RoutesCounter ++ ) {
					Routes.push ( _Routes [ RoutesCounter ].asObject );
				}
				return {
					name : _Name,
					routes : _Routes,
					objId : _ObjId,
					objName : _ObjName,
					objVersion : _ObjVersion
				};
			},
			set object ( Object ) {
				if ( ! Object.objVersion ) {
					throw 'No ObjVersion for TravelData';
				}
				if ( '1.0.0' !== Object.objVersion ) {
					throw 'invalid objVersion for TravelData';
				}
				if ( ! Object.objName ) {
					throw 'No objName for TravelData';
				}
				if ( 'TravelData' !== Object.objName ) {
					throw 'Invalid objName for TravelData';
				}
				_Name = Object.name || '';
				_Routes.length = 0;
				for ( var RoutesCounter = 0; RoutesCounter < Object.routes.length; RoutesCounter ++ ) {
					var tmpRoute = require ( './Route' ) ( );
					tmpRoute.object = Object.routes [ RoutesCounter ];
					_Routes.push ( tmpRoute.object );
				}
				_ObjId = require ( './ObjId' ) ( );
			}
		};
	};
	
	/* --- End of getTravelData function --- */
	
	/* 
	--- Exports ------------------------------------------------------------------------------------------------------------
	*/
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = getTravelData;
	}

} ) ( );

/* --- End of MapData.js file --- */
},{"./ObjId":6,"./Route":7}],10:[function(require,module,exports){
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


(function() {
	
	'use strict';
	
	var _ObjName = 'WayPoint';
	var _ObjVersion = '1.0.0';

	var getWayPoint = function ( ) {
		
		var _Name = '';
		var _Lat = 0;
		var _Lng = 0;
		
		var _ObjId = -1;
		
		return {
			get name ( ) { return _Name; },
			set name ( Name ) { _Name = Name;},
			
			get lat ( ) { return _Lat;},
			set lat ( Lat ) { _Lat = Lat; },
			
			get lng ( ) { return _Lng;},
			set lng ( Lng ) { _Lng = Lng; },
			
			get latLng ( ) { return [ _Lat, _Lng ];},
			set latLng ( LatLng ) { _Lat = LatLng [ 0 ]; _Lng = LatLng [ 1 ]; },

			get objId ( ) { return _ObjId; },
			get objName ( ) { return _ObjName; },
			get objVersion ( ) { return _ObjVersion; },
			
			get object ( ) {
				return {
					name : _Name,
					lat : _Lat,
					lng : _Lng,
					objId : _ObjId,
					objName : _ObjName,
					objVersion : _ObjVersion
				};
			},
			set object ( Object ) {
				if ( ! Object.objVersion ) {
					throw 'No ObjVersion for WayPoint';
				}
				if ( '1.0.0' !== Object.objVersion ) {
					throw 'invalid objVersion for WayPoint';
				}
				if ( ! Object.objName ) {
					throw 'No objName for WayPoint';
				}
				if ( 'WayPoint' !== Object.objName ) {
					throw 'Invalid objName for WayPoint';
				}
				_Name = Object.name || '';
				_Lat = Object.lat || 0;
				_Lng = Object.lng || 0;
				_ObjId = require ( './ObjId' ) ( );
			}
		};
	};
	
	/* --- End of getTravelData function --- */
	
	/* 
	--- Exports ------------------------------------------------------------------------------------------------------------
	*/
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = getWayPoint;
	}

} ) ( );

/* --- End of MapData.js file --- */
},{"./ObjId":6}]},{},[5]);
