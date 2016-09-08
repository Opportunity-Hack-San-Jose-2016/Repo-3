/***
	integrate the Smap witht the functionality 
**/

// test -- intilization of the map function 
Smap.init("mapid");

Smap.addCtrl(function(){
	console.log("click on the controller");
},{
	outerClass: "noshadow leaflet-draw-toolbar leaflet-bar", 
	position: "bottomright", 
	innnerClass: "tn btn-danger btn-lg addpin",
	tag: "button"
})

// L.Control.RemoveAll = L.Control.extend(
// {
//     options:
//     {
//         position: 'bottomright',
//     },
//     onAdd: function (map) {
//         var controlDiv = L.DomUtil.create('div', 'leaflet-draw-toolbar leaflet-bar');
//         L.DomEvent
//             .addListener(controlDiv, 'click', L.DomEvent.stopPropagation)
//             .addListener(controlDiv, 'click', L.DomEvent.preventDefault)
//         .addListener(controlDiv, 'click', function () {
//             drawnItems.clearLayers();
//         });

//         var controlUI = L.DomUtil.create('a', 'leaflet-draw-edit-remove', controlDiv);
//         controlUI.title = 'Remove All Polygons';
//         controlUI.href = '#';
//         return controlDiv;
//     }
// });
// var removeAllControl = new L.Control.RemoveAll();

// var map = Smap.Smap();
// map.addControl(removeAllControl);





/*

	// Resources for futher refrance 
	// http://m.spotcrime.com/mobile/map/index.html#
	// http://www.mylocalcrime.com/#37.327686%2C%20-121.8858

	// Global variables 
	var _t;
	var _geoL;
	
	// set size for the map -- map its dimentions with the browser
	$('#mapid').css('height', $(window).innerHeight() );
	$(window).resize(function(){
		$('#mapid').css('height', $(window).innerHeight() );
	})

	// current Pins
	var currentPin=[];

	// set location to the current location 
	var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	// var mymap = L.map('mapid').setView([geoplugin_latitude(),geoplugin_longitude()], 13);

	// Loading the "open streat map" 
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlsYW5wYWxzaW5naCIsImEiOiJjaXFmb2VwbHIwM3FlZnJtMXR2NHJjcDBsIn0.vPN-24ZXoCTdATPYq3y_VA', {
	// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		id: 'mapbox.streets'
	}).addTo(mymap);

	// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	// }).addTo(mymap);

	// curent position marker 
	var marker = L.marker([37.3,-121.9])//.addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.");

// temporary point variable 
var temp = {type: "Feature", properties: {}, geometry: {type: "Point", coordinates: [75.87158203125, 30.70878122625409]}};


	// var popup = L.popup();
	// function onMapClick(e) {};


	// open edit mode for the map.
	var editfuntion = function(){
		console.log("hello");
		function onMapClick(e) {
			$('.btn-icon').prop('disabled', false);
			marker.setLatLng(e.latlng).addTo(mymap);
			// popup
			// 	.setLatLng(e.latlng)
			// 	.setContent("You clicked the map at " + e.latlng.toString())
			// 	.openOn(mymap);
		}
		mymap.on('click', onMapClick);
		$("#mapid").addClass('editmap');
	}





	// functionality for the ADD button.
	$("#addpin").click(function(e){
					// console.log("hello");

		editfuntion();
		$(this).addClass('hidden');
		$('#layover').removeClass('hidden');
		$('.btn-icon').prop('disabled', true);

	});

	// submit the pin
	// $("#submit").click(function(e){
	// 	$('#layover').addClass('hidden');
	// 	$('#addpin').removeClass('hidden');
	// 	submitpin();
	// });

	// map rendring when the pin is updated. 
	var submitpin = function(tag){
		$('#layover').addClass('hidden');
		$('#addpin').removeClass('hidden');
		
		mymap.removeLayer(marker);
		currentPin = marker.getLatLng()
		var comment = $("#comment").val();
		$("#comment").val('');
		_geoL= L.circle(currentPin, 70, {
			color: getColorCode(tag),
			fillColor: getColorCode(tag),
			fillOpacity: 1
		}).addTo(mymap).bindPopup('#'+tag).toGeoJSON();

		_geoL.properties={tag:tag};

		// mymap.clearAllEventListeners();

		creatTweet({tag:tag,location: currentPin});

		console.log(JSON.stringify(_geoL));

		console.dir({ 'logLat':  currentPin, 'tag': tag })
		// $.post('/tweet', { tweet:Tweet }, function(data){
		// 	alert("tweeted ;) "+Tweet);
		// });
	};
	$('.btn-icon').click(function(e){
		e.preventDefault();
		var tag = $(this).prop('id');
		console.log("form submit");
		submitpin(tag);
	});

	// $("#submitform").submit(function(e){

	// 	e.preventDefault();
	// 	console.log("form submit");
	// 	submitpin();
	// });

var getColorCode = function(tag){
	var color= '#ED2324';
	switch(tag) {
    case 'help':
        color = '#ED2324'
        break;
    case 'hazard':
        color = '#F49B33'
        break;
    case 'found':
        color = '#62E16E'
        break;
    case 'supplies':
        color = '#5056D5'
        break;
    default:
        color = '#ED2324'
	}
	return color;
}

var creatTweet = function(o){
	// console.dir(o);?lat='+o.location.lat+'&long='+o.location.lng
	// $.getJSON('http://scatter-otl.rhcloud.com/location', {lat:o.location.lat,long:o.location.lng}, function(data){
	// 	console.dir(data);
	// });
	_t='';
	_t = _t + '#'+o.tag+' ';
	displayLocation(o.location.lat,o.location.lng);
		// t = "#"+tag + " ";
	// return t;
}

      function displayLocation(latitude,longitude){
        var request = new XMLHttpRequest();

        var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function(){
          if(request.readyState == 4 && request.status == 200){
            var data = JSON.parse(request.responseText);
            var address = data.results[0];

            //__________________________fetching city and state
        result=address.address_components;
          var city='';
          var state='';
          for(var i=0;i<result.length;++i)
          {
              if(result[i].types[0]=="administrative_area_level_1"){city = result[i].long_name.trim().split(' ').join('');}
              if(result[i].types[0]=="locality"){state = result[i].long_name.trim().split(' ').join('');}
          }
          // alert(info.join(','));
          //_________________________done


            _t = _t + '#'+city + ' #'+ state +' #MercyCorp';
             $.post('/tweet', { tweet:_t, _geoL }, function(data){
				// alert("tweeted ;) "+_t);
				toastr["info"](_t, "Tweeted")

				toastr.options = {
				  "closeButton": false,
				  "debug": false,
				  "newestOnTop": false,
				  "progressBar": false,
				  "positionClass": "toast-top-center",
				  "preventDuplicates": false,
				  "onclick": null,
				  "showDuration": "30000",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}

				console.log(data);
				// fillMap(data);
			});
          }
        };
        request.send();
      };




var fillMap= function(data){
	console.log("this the length"+data.length);
	for(var key in data ){

		// console.log(data[key]);
		console.dir(jQuery.parseJSON(data[key]));
		var temp = jQuery.parseJSON(data[key]);
		// console.log(temp.geometry.coordinates[0].toFixed(2));
		// console.log(temp.geometry.coordinates[1].toFixed(2));
		// console.log(temp.properties.tag);
		// var c = temp.geometry.coordinates;
		var la = temp.geometry.coordinates[0].toFixed(3);
		var ll = temp.geometry.coordinates[1].toFixed(3);
		var c = [+ll,+la ];
		console.log(c);
		L.circle( c, 70, {
		// L.circle( [37.3, -121.9] , 70, {

			color: getColorCode(temp.properties.tag),
			fillColor: getColorCode(temp.properties.tag),
			fillOpacity: 1
		}).addTo(mymap).bindPopup('#'+ temp.properties.tag);

	}
};


$.post('/getpoints', {}, function(data){
				console.log(data.length);
				fillMap(data);
			});



$.getJSON("scr/countries.geojson", function(data){
	AddLayer(mymap, {
		'geoJson': data 
	})
});

var printCenter = function(){
	console.log(mymap.getCenter());
};

// // put layer on the map
// // var  countries;
//  $.getJSON("scr/countries.geojson", function(data){
// 	console.log("hello there after getting the geo jason");
// 	var countries =  data;
// 	function countriesStyle (feature){
// 		return{
// 			fillColor : 'red',
// 			weight: 2,
// 			opacity: 1,
// 			color : 'white',
// 			dashArray : 3,
// 			fillOpacity : 0.7
// 		}
// 	}

// 	// var map = L.map('map').setView([51.505, -0.09], 4);
// 	// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
// 	// {
// 	//   attribution: 'Tiles by Mansi'

// 	// }).addTo(map);
// 	var countriesLayer = L.geoJson(
// 		countries,
// 		{style: countriesStyle}).addTo(mymap)

// });
// // console.log(countries);
// // console.log(countries);















// };*/