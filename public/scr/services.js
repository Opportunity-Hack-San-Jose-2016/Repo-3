/********
START: Get the current loction 
*********/
// get current location and trigger "sucess" function with position parameter. return the position parameter 
var GetCurentLocation = function(success, error){
	var s = success || function(){console.log("postion sucessfully found")};
	var e = error || function(){console.log("error in determining the location.")};
	var a = $.geolocation.get({
		success: 	function(position) {
						s(position);
					}, 
		error: 		function(){
						e();
					}
	});
};

// // usage of the function "GetCurentLocation"
// GetCurentLocation(function(position){
// 	console.log(position);
// });
/********
END: Get the current loction 
*********/


/********
START: Add the layer to the map object passed with the features passed
	features : {
		geoJson: "geoJson object",
		style: "layer styles",
		name: "name of the country/region", 
	}
*********/

var AddLayer = function(map, features){
	var style = features.style || { fillColor : 'yellow', weight: 2, opacity: .5, color : 'white', dashArray : 3, fillOpacity : 0.7}
	if (features.geoJson) {
		L.geoJson(
			features.geoJson,
			{style: style}).addTo(map)
	}
};

// // usage of the fucntion AddLayer
// $.getJSON("scr/countries.geojson", function(data){
// 	AddLayer(mymap, {
// 		'geoJson': data 
// 	})
// });

/********
END: Add the layer to the map object passed 
*********/



/********
START: Get the center location of the map
*********/


var GetCenter = function(mymap){
	// console.log(mymap.getCenter());
	return mymap.getCenter()
};

/********
END: Get the center location of the map
*********/

/********
START: Set the center location of the map
*********/


var SetCenter = function(mymap){
	// console.log(mymap.getCenter());
	return mymap.setView()
};

/********
END: Get the center location of the map
*********/

var fitViewPort = function(divID){
	// set size for the div to the view port of the browser
    $('#'+ divID).css('height', $(window).innerHeight() );
    $(window).resize(function(){
      $('#'+ divID).css('height', $(window).innerHeight() );
    })
}

var addPin = function(mymap, options){
	var _geoL= L.circle(currentPin, 70, {
		color: options.color || '#ED2324',
		fillColor: options.fillColor || options.color,
		fillOpacity: options.opacity || 1
	}).addTo(mymap).bindPopup((options.tag)?'#'+options.tag:'no tag').toGeoJSON();
	_geoL.properties={tag:options.tag || "no tag"};
	return _geoL
};


/********
START: adding the controller the map
 callback: on click event handeller ,
 options : {
 		position: "topleft || topright || bottomleft || bottomright",
 		outerClass: class for the div controller,
 		tag: contorlUI html tag,  || 'a' 
		innnerClass: class for the contorlUI tag,
		title: title for the controller,
		href: href if that a 'a' tag
*********/
var addControler = function(mymap, callback,  options){
	L.Control.Crtl = L.Control.extend(
	{
	    options:
	    {
	        position: options.position || 'topleft',
	    },
	    onAdd: function (map) {
	        var controlDiv = L.DomUtil.create('div', options.outerClass || 'leaflet-draw-toolbar leaflet-bar');
	        L.DomEvent
	            .addListener(controlDiv, 'click', L.DomEvent.stopPropagation)
	            .addListener(controlDiv, 'click', L.DomEvent.preventDefault)
	        .addListener(controlDiv, 'click', function () {
	            callback();
	        });

	        var controlUI = L.DomUtil.create(options.tag || 'a', options.innnerClass || 'leaflet-draw-edit-remove', controlDiv);
	        controlUI.title = options.title || 'No title';
	        if(options.href) controlUI.href = '#'   ;
	        return controlDiv;
	    }
	});
	var crtl = new L.Control.Crtl();
	mymap.addControl(crtl);
}
/********
END: adding the controller the map
*********/














