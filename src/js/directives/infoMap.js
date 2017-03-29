/* global google:ignore */

angular
  .module('hrApp')
  .directive('infoMap', infoMap);

infoMap.$inject = ['$window'];
function infoMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="info-map"></div>', //Better for small bits of html rather than creating a new file
    scope: {
      center: '=',
      resources: '=',
      info: '='
    },

    link($scope, element) {

      let infoWindow = null;
      let resourceMarkers = [];
      let infoMarkers = [];
      let radius = null;
      const slider = document.getElementById('slider');

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

            const circleUser = new google.maps.Circle({
              strokeColor: '#0000FF',
              strokeOpacity: 0.8,
              strokeWeight: 1.5,
              fillColor: '#0000FF',
              fillOpacity: 0.1,
              map: map,
              center: pos,
              radius: radius
            });

            slider.onchange = function() {
              radius = parseFloat(this.value);
              circleUser.setRadius(radius);
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

      function removeMarkers(markers) {
        markers.forEach((marker) => {
          marker.setMap(null);
        });

        return [];
      }


      function addResourceMarkers() {
        resourceMarkers = removeMarkers(resourceMarkers);
        $scope.resources.forEach((resource) => {
          const marker = new $window.google.maps.Marker({
            position: { lat: parseFloat(resource.location.lat), lng: parseFloat(resource.location.lng) },
            map: map,
            animation: google.maps.Animation.DROP
          });
          console.log($scope.resources);
          resourceMarkers.push(marker);

          google.maps.event.addListener(marker, 'click', function () {
            if(infoWindow) infoWindow.close();
            var infoWindowOptions = {
              content: `<div class="info-window"><p>${resource.name}<br>${resource.type}<br>${resource.telephone}<br><a href="${resource.website}" target="_blank">Website</a><br>${resource.address}</p></div>`
            };
            infoWindow = new google.maps.InfoWindow(infoWindowOptions);
            infoWindow.open(map, marker);
          });
        });
      }


      function addInfoMarkers() {

        infoMarkers = removeMarkers(infoMarkers);
        $scope.info.forEach((info) => {
          const marker = new $window.google.maps.Marker({
            position: { lat: parseFloat(info.lat), lng: parseFloat(info.lng) },
            map: map,
            animation: google.maps.Animation.DROP,
            icon: '/images/1.png'
          });

          infoMarkers.push(marker);
          console.log($scope.info);

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


      $scope.$watch('resources', (newVal) => {
        if(newVal && newVal.length) addResourceMarkers();
      });

      $scope.$watch('info', (newVal) => {
        if(newVal && newVal.length) addInfoMarkers();
      });
    }
  };

  return directive;
}
