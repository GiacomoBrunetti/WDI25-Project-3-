/* global google:ignore */

angular
  .module('hrApp')
  .directive('userMap', userMap)
  .directive('autocomplete', autocomplete);

userMap.$inject = ['$window'];
function userMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="user-map"></div>', //Better for small bits of html rather than creating a new file
    scope: {
      chosenLocation: '=',
      info: '=',
      updateLatLng: '=method'
    },

    link($scope, element) {

      let infoMarkers = [];

      let currentLocationMarker = null;
      const map = new $window.google.maps.Map(element[0], {
        zoom: 12,
        center: {lat: 51.515559, lng: -0.071746},
        scrollwheel: false
      });

      function getLocation() {
        currentLocationMarker = new $window.google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            console.log(pos);
            $scope.updateLatLng(pos);


            currentLocationMarker.setPosition(pos);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, currentLocationMarker, map.getCenter());
          });
        } else {
        // Browser doesn't support Geolocation
          handleLocationError(false, currentLocationMarker, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
        }
      }

      getLocation();

      $scope.$watch('chosenLocation', () => {
        if($scope.chosenLocation.lat && $scope.chosenLocation.lng) {
          currentLocationMarker.setPosition($scope.chosenLocation);
          map.setCenter($scope.chosenLocation);
        }
      });

      function removeMarkers(markers) {
        markers.forEach((marker) => {
          marker.setMap(null);
        });

        return [];
      }

      function addInfoMarkers() {


        infoMarkers = removeMarkers(infoMarkers);
        $scope.info.forEach((info) => {
          const marker = new $window.google.maps.Marker({
            position: { lat: parseFloat(info.lat), lng: parseFloat(info.lng) },
            map: map,
            icon: '/images/1.png'
          });

          google.maps.event.addListener(marker, 'click', function () {
            console.log(marker.position.lat(), marker.position.lng());

            const latLng = { lat: marker.position.lat(), lng: marker.position.lng() };
            $scope.updateLatLng(latLng);
          });
          infoMarkers.push(marker);
        });
      }

      $scope.$watch('info', (newVal) => {
        if(newVal && newVal.length) addInfoMarkers();
      });

    }
  };

  return directive;
}

autocomplete.$inject = ['$window'];
function autocomplete($window) {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      lat: '=',
      lng: '='
    },
    link: function($scope, element, attrs, model) {
      const options = {
        types: []
      };

      const autocomplete = new $window.google.maps.places.Autocomplete(element[0], options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        $scope.lat = place.geometry.location.toJSON().lat;
        $scope.lng = place.geometry.location.toJSON().lng;
        model.$setViewValue(element.val());
      });
    }
  };
}
