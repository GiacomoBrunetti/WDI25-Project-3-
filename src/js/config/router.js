angular
  .module('hrApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('infoIndex', {
      url: '/',
      templateUrl: 'js/views/info/index.html',
      controller: 'InfoIndexCtrl as infoIndex'
    })
    .state('infoNew', {
      url: '/info/new',
      templateUrl: 'js/views/info/new.html',
      controller: 'InfoNewCtrl as infoNew'
    })
    .state('infoShow', {
      url: '/info/:id',
      templateUrl: 'js/views/info/show.html',
      controller: 'InfoShowCtrl as infoShow'
    })
    .state('login', {
      url: '/',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    });

  $urlRouterProvider.otherwise('/');
}
