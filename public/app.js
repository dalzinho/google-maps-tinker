var pollok = {lat: 55.824109, lng: -4.288396};
var infoContentString = "Home of the world's finest football club."

var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.BOUNCE,
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      var coords = {};
      coords.lat = event.latLng.lat();
      coords.lng = event.latLng.lng();
      console.log(coords);
      this.addMarker(coords);
    }.bind(this));
  },
};

var app = function(){
  var container = document.getElementById("main-map");
  var zoom = 16;
  var mainMap = new MapWrapper(container, pollok, zoom);

  // var marker = new google.maps.Marker({
  //   position: pollok,
  //   map: mainMap,
  //   title: "Pollok Football Club"
  // });



  var infowindow = new google.maps.InfoWindow({
    content: infoContentString
  });

  var marker = mainMap.addMarker(pollok);

  marker.addListener('click', function(){
    infowindow.open(mainMap, marker);
  });

}

window.onload = app;