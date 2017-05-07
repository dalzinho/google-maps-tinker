var pollok = {lat: 55.824109, lng: -4.288396};
var krasnayaPloshchad = {lat: 55.753930, lng: 37.620795}
var infoContentString = "Home of the world's finest football club."

var app = function(){

  var mainMap = new google.maps.Map(document.querySelector('#map'),{
    zoom: 16,
    center: pollok,
  });


  var infowindow = new google.maps.InfoWindow({
    content: infoContentString
  });

  var marker = new google.maps.Marker({
    position: pollok,
    map:mainMap,
    animation: google.maps.Animation.BOUNCE,
  });

  marker.addListener('click', function(){
    infowindow.open(mainMap, marker);
  });

  var moskva = document.querySelector('#moscow');
  moskva.onclick = function(){
    mainMap.setCenter(krasnayaPloshchad);
  };

  var lokButton = document.querySelector('#pollok');
  lokButton.onclick = function(){
    mainMap.setCenter(pollok);
  }

  var whereAmI = document.querySelector('#where-am-i');
  whereAmI.onclick = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      var here = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      console.log('here', here);

      mainMap.setCenter(here);
      var hereMarker = new google.maps.Marker({
        position: here,
        map: mainMap,
        animation: google.maps.Animation.DROP,
      });

    });
  }
}
window.onload = app;