angular
  .module('hrApp', ['ui.router', 'ngResource', 'satellizer', 'ngMessages', 'ngAnimate'])

  .controller('tuamadre', function ($scope){
    $scope.bar = false;
    $scope.clicked = function(){
      $scope.bar = !($scope.bar);
    };
  });
