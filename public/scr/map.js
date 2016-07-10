// function getLocation() {
//     if (navigator.geolocation) {
//     	LoadMap([37.37695305874001,-121.92149060595777]);
//         // navigator.geolocation.getCurrentPosition(LoadMap);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function LoadMap(position) {
// // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
	
	$('#mapid').css('height', $(window).innerHeight() );
	// $('#layover').css('height', $(window).innerHeight() );
	$(window).resize(function(){
		$('#mapid').css('height', $(window).innerHeight() );
	// $('#layover').css('height', $(window).innerHeight() );
	})
	var currentPin=[];

	var mymap = L.map('mapid').setView([37.3,-121.9], 13);

	// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlsYW5wYWxzaW5naCIsImEiOiJjaXFmb2VwbHIwM3FlZnJtMXR2NHJjcDBsIn0.vPN-24ZXoCTdATPYq3y_VA', {
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		id: 'mapbox.streets'
	}).addTo(mymap);


	var marker = L.marker([37.3,-121.9])//.addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.");

	// L.circle([51.508, -0.11], 500, {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5
	// }).addTo(mymap).bindPopup("I am a circle.");

	// L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");


	var popup = L.popup();
	// function onMapClick(e) {};


	// open edit mode for the map.
	var editfuntion = function(){
		console.log("hello");
		function onMapClick(e) {
			marker.setLatLng(e.latlng).addTo(mymap);
			$('.btn-icon').prop('disabled', false);
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
		L.circle(currentPin, 70, {
			color: getColorCode(tag),
			fillColor: getColorCode(tag),
			fillOpacity: 1
		}).addTo(mymap).bindPopup('#'+tag);

		mymap.clearAllEventListeners();

		console.dir({ 'logLat':  currentPin, 'tag': tag })

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


































// };