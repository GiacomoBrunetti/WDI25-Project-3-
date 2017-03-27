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
      chosenLocation: '='
    },

    link($scope, element) {

      let infoWindow = null;
      const map = new $window.google.maps.Map(element[0], {
        zoom: 12,
        center: {lat: 51.515559, lng: -0.071746},
        scrollwheel: false
      });

      function getLocation() {
        infoWindow = new $window.google.maps.Marker({
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

      $scope.$watch('chosenLocation', () => {
        if($scope.chosenLocation.lat && $scope.chosenLocation.lng) {
          infoWindow.setPosition($scope.chosenLocation);
          map.setCenter($scope.chosenLocation);
        }
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
    link: function(scope, element, attrs, model) {
      const options = {
        types: []
      };

      const autocomplete = new $window.google.maps.places.Autocomplete(element[0], options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        scope.lat = place.geometry.location.toJSON().lat;
        scope.lng = place.geometry.location.toJSON().lng;
        model.$setViewValue(element.val());
      });
    }
  };
}
