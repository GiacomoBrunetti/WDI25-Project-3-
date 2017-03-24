angular
  .module('hrApp')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$rootScope', '$state', '$auth', 'User'];
function UserCtrl($rootScope, $state, $auth, User) {
  const vm = this;
  const { userId } = $auth.getPayload();
  vm.navIsOpen = false;

  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.navIsOpen = false;
    if($auth.getPayload()) vm.currentUserId = $auth.getPayload().userId;
  });

  if(userId) vm.user= User.get({ id: userId });

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;
}
