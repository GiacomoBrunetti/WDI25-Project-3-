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

  User.get($stateParams, (user) => {
    vm.user = user;
    vm.userInfos = Info.query({ createdBy: user.id });
  });

  function userDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('login'));
  }

  vm.delete = userDelete;



  function deleteInfo(info) {
    Info
    .delete({id: info.id})
    .$promise
    .then(() => {
      const index = vm.userInfos.indexOf(info);
      vm.userInfos.splice(index, 1);
    });
  }

  vm.deleteInfo = deleteInfo;
}
