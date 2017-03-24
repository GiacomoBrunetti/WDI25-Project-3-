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
      center: '='
    },
    link($scope, element) {
      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: {lat: 51.515559, lng: -0.071746}
      });

      new $window.google.maps.Marker({
        position: {lat: 51.515559, lng: -0.071746},
        map: map,
        animation: $window.google.maps.Animation.DROP
      });
    }
  };
  return directive;
}
