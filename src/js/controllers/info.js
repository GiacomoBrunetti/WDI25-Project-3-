angular
  .module('hrApp')
  .controller('InfoIndexCtrl', InfoIndexCtrl)
  .controller('InfoNewCtrl', InfoNewCtrl)
  .controller('InfoShowCtrl', InfoShowCtrl)
  .controller('InfoEditCtrl', InfoEditCtrl);

InfoIndexCtrl.$inject = ['Info', 'Resource', 'filterFilter', '$scope'];
function InfoIndexCtrl(Info, Resource, filterFilter, $scope) {
  const vm = this;

  vm.allInfo = Info.query();
  vm.allResources = Resource.query();
  vm.categoryResource = '';
  vm.categoryInfo = '';

  function filterResources() {
    vm.filteredResources = filterFilter(vm.allResources, { type: vm.categoryResource });
  }

  function filterInfo() {
    const params = {};
    if(vm.categoryInfo === 'Children') params.children = true;
    if(vm.categoryInfo === 'Pets') params.pets = true;
    vm.filteredInfo = filterFilter(vm.allInfo, params);
  }

  $scope.$watchGroup([
    () => vm.allResources.$resolved,
    () => vm.categoryResource
  ], filterResources);

  $scope.$watchGroup([
    () => vm.allInfo.$resolved,
    () => vm.categoryInfo
  ], filterInfo);
}

InfoNewCtrl.$inject = ['Info', '$state', '$auth'];
function InfoNewCtrl(Info, $state, $auth) {
  const vm = this;
  if($auth.getPayload()) vm.currentUserId = $auth.getPayload().userId;
  vm.info = {};

  function infoCreate() {
    if(vm.newForm.$valid) {
      Info
        .save(vm.info)
        .$promise
        .then(() => $state.go('userShow', { id: vm.currentUserId }));
    }
  }

  vm.create = infoCreate;
}

InfoShowCtrl.$inject = ['Info', '$stateParams', '$state'];
function InfoShowCtrl(Info, $stateParams, $state) {
  const vm = this;
  vm.newComment = {};
  vm.info = Info.get($stateParams);

  function infoDelete() {
    vm.info
      .$remove()
      .then(() => $state.go('infoIndex'));
  }

  vm.delete = infoDelete;

}

InfoEditCtrl.$inject = ['Info', '$stateParams', '$state'];
function InfoEditCtrl(Info, $stateParams, $state) {
  const vm = this;

  vm.info = Info.get($stateParams);

  function infoUpdate() {
    vm.info
      .$update()
      .then(() => $state.go('usersShow', $stateParams));
  }

  vm.update = infoUpdate;
}
