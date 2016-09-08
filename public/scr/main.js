/****
Using the fucntions from service.js
****/

var Smap = (function() {
  // set amp object as global
  var _map;

  /***
  START: Debuging -- retun _map object for debuging 
  ***/  
  var getmap = function(){
    return _map;
  };
  /***
  STOP: Debuging 
  ***/


  /***
  START: Initilize -- _map object, set current location 
  ***/
  var init = function(mapid){
    // fit to the view port
    fitViewPort(mapid);

    // initilizing the map object --  need to fix the fit world function -- set to the boundries 
    _map = L.map(mapid).fitWorld();
    _map.setZoom(2);

    // if location -- set map location to the current location
    GetCurentLocation(function(position){
        // set the map to the curent location
        _map.setView([position.coords.latitude, position.coords.longitude], 13);
    });
    


    // Loading the "open streat map" 
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlsYW5wYWxzaW5naCIsImEiOiJjaXFmb2VwbHIwM3FlZnJtMXR2NHJjcDBsIn0.vPN-24ZXoCTdATPYq3y_VA', {
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      id: 'mapbox.streets'
    }).addTo(_map);
  };
  /***
  STOP: Initilize 
  ***/

  /***
  START: addpin -- options:   
  ***/
  var addPin = function(options){
    addpin(_map,options);
  };
  /***
  STOP: addPin
  ***/

  var addCtrl = function(callback, options){
    addControler(_map, callback, options)
  };

  return {
      // START: for debuging
      Smap: getmap,
      // END: debuging  
      init: init,
      addPin: addPin, 
      addCtrl: addCtrl
  };
})();

















