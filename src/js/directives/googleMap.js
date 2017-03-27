/* global google:ignore */

angular
  .module('hrApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>', //Better for small bits of html rather than creating a new file
    scope: {
      center: '=',
      resources: '='
    },
    link($scope, element) {

      const map = new $window.google.maps.Map(element[0], {
        zoom: 12,
        center: {lat: 51.515559, lng: -0.071746},
        scrollwheel: false
      });

      function getLocation() {
        const infoWindow = new $window.google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
        // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
        }
      }

      getLocation();

      let markers = [];

      function removeMarkers() {
        markers.forEach((marker) => {
          marker.setMap(null);
        });

        markers = [];
      }

      function addMarkers() {
        removeMarkers();
        $scope.resources.forEach((resource) => {
          console.log(resource.location.lat);
          const marker = new $window.google.maps.Marker({
            position: { lat: parseFloat(resource.location.lat), lng: parseFloat(resource.location.lng) },
            map: map,
            animation: google.maps.Animation.DROP
          });
          markers.push(marker);
        });
      }

      $scope.$watch('resources', addMarkers);
    }
  };

  return directive;
}
