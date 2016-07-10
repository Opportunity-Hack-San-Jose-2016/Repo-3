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
			$('#submit').prop('disabled', false);
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
		$('#submit').prop('disabled', true);

	});

	// submit the pin
	$("#submit").click(function(e){
		$(this).parents('#layover').addClass('hidden');
		$('#addpin').removeClass('hidden');
		submitpin();
	});

	// map rendring when the pin is updated. 
	var submitpin = function(){
		mymap.removeLayer(marker);
		currentPin = marker.getLatLng()
		var comment = $("#comment").val();
		$("#comment").val('');
		L.circle(currentPin, 50, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup(comment);

		mymap.clearAllEventListeners();

		console.dir({ 'logLat':  currentPin, 'comments': comment })

	};


































// };