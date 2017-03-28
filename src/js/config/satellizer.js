angular
  .module('hrApp')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';
  $authProvider.facebook({
    clientId: '1840903826192699',
    url: '/api/oauth/facebook' 

  });
  $authProvider.tokenPrefix = '';

}
