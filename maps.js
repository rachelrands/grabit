console.log(navigator);

GMaps.geolocate({
  success: function(position) {
    var mapObj = new GMaps({
      el: '#map',
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      zoom: 20
    });

    mapObj.setCenter(position.coords.latitude, position.coords.longitude);
    console.log(position.coords.latitude);

    c = mapObj.drawCircle({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      radius: 10,
      strokeColor: '#BBD8E9',
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: '#BBD8E9',
      fillOpacity: 0.6
    });

    mapObj.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      draggable: true,
      fences: [c],
      outside: function(marker, fence) {
        alert('This marker has been moved outside of its fence');
      }
    });
  },
  error: function(error) {
    alert('Geolocation failed: '+error.message);

    var mapObj = new GMaps({
      el: '#map',
      lat: 29.037652,
      lng: -81.301941,
      zoom: 20
    });
  },
  not_supported: function() {
    alert("Your browser does not support geolocation");
  },
});
