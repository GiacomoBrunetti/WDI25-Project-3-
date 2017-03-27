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

UserShowCtrl.$inject = ['User', 'Info', '$stateParams', '$state'];
function UserShowCtrl(User, Info, $stateParams, $state) {
  const vm = this;
  vm.newComment = {};

  User.get($stateParams, (user) => {
    vm.user = user;
    vm.userInfos = Info.query({ createdBy: user.id });
  });

  function userDelete() {
    vm.info
      .$remove()
      .then(() => $state.go('/'));
  }

  vm.delete = userDelete;
}
