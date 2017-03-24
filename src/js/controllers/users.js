angular
  .module('hrApp')
  .controller('UserCtrl', UserCtrl)
  .controller('UserShowCtrl', UserShowCtrl);

UserCtrl.$inject = ['$rootScope', '$state', '$auth', 'User'];
function UserCtrl($rootScope, $state, $auth, User) {
  const vm = this;
  const { userId } = $auth.getPayload();

  if(userId) vm.user= User.get({ id: userId });
}

UserShowCtrl.$inject = ['User', '$stateParams', '$state'];
function UserShowCtrl($stateParams, $state, User) {
  const vm = this;
  vm.newComment = {};
  vm.info = User.get($stateParams);

  function userDelete() {
    vm.info
      .$remove()
      .then(() => $state.go('/'));
  }

  vm.delete = userDelete;
}
