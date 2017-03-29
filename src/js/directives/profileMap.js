/* global google:ignore */

angular
  .module('hrApp')
  .directive('profileMap', profileMap);


profileMap.$inject = ['$window'];
function profileMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="profile-map"></div>', //Better for small bits of html rather than creating a new file
    scope: {
      chosenLocation: '=',
      userInfo: '='
    },

    link($scope, element) {

      const map = new $window.google.maps.Map(element[0], {
        zoom: 12,
        center: {lat: 51.515559, lng: -0.071746},
        scrollwheel: false
      });

      function getLocation() {
        const locationMarker = new $window.google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            locationMarker.setPosition(pos);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, locationMarker, map.getCenter());
          });
        } else {
        // Browser doesn't support Geolocation
          handleLocationError(false, locationMarker, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          locationMarker.setPosition(pos);
        }

      }

      getLocation();

      let infoMarkers = [];
      let infoWindow = [];

      function removeMarkers(markers) {
        markers.forEach((marker) => {
          marker.setMap(null);
        });

        return [];
      }

      function addInfoMarkers() {
        infoMarkers = removeMarkers(infoMarkers);
        $scope.userInfo.forEach((info) => {
          const marker = new $window.google.maps.Marker({
            position: { lat: parseFloat(info.lat), lng: parseFloat(info.lng) },
            map: map,
            animation: google.maps.Animation.DROP,
            icon: '/images/1.png'
          });

          infoMarkers.push(marker);
          console.log($scope.profile);

          google.maps.event.addListener(marker, 'click', function () {
            if(infoWindow) infoWindow.close();
            var infoWindowOptions = {
              content: `<div class="info-window"><p>${info.number}<br>${info.children}</p></div>`
            };
            infoWindow = new google.maps.InfoWindow(infoWindowOptions);
            infoWindow.open(map, marker);
          });
        });
      }

      $scope.$watch('userInfo.$resolved', (resolved) => {
        if(resolved) addInfoMarkers();
      });

    }
  };

  return directive;
}
