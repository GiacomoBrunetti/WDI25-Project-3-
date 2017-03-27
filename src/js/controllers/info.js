angular
  .module('hrApp')
  .controller('InfoIndexCtrl', InfoIndexCtrl)
  .controller('InfoNewCtrl', InfoNewCtrl)
  .controller('InfoShowCtrl', InfoShowCtrl)
  .controller('InfoEditCtrl', InfoEditCtrl);

InfoIndexCtrl.$inject = ['Info', 'Resource', 'filterFilter', '$scope'];
function InfoIndexCtrl(Info, Resource, filterFilter, $scope) {
  const vm = this;

  vm.all = Info.query();
  vm.allResources = Resource.query();

  function filterInfo() {
    const params = vm.q;

    vm.filtered = filterFilter(vm.all, params);
  }

  $scope.$watchGroup([
    () => vm.q
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

InfoShowCtrl.$inject = ['Info', 'InfoComment', '$stateParams', '$state'];
function InfoShowCtrl(Info, InfoComment, $stateParams, $state) {
  const vm = this;
  vm.newComment = {};
  vm.info = Info.get($stateParams);

  function infoDelete() {
    vm.info
      .$remove()
      .then(() => $state.go('infoIndex'));
  }

  vm.delete = infoDelete;

  function addComment() {
    InfoComment
      .save({ infoId: vm.info.id }, vm.newComment)
      .$promise
      .then((comment) => {
        vm.info.comments.push(comment);
        vm.newComment = {};
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    InfoComment
      .delete({ infoId: vm.info.id, id: comment.id })
      .$promise
      .then(() => {
        const index = vm.info.comments.indexOf(comment);
        vm.info.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;
}

InfoEditCtrl.$inject = ['Info', '$stateParams', '$state'];
function InfoEditCtrl(Info, $stateParams, $state) {
  const vm = this;

  vm.info = Info.get($stateParams);

  function infoUpdate() {
    vm.info
      .$update()
      .then(() => $state.go('infoShow', $stateParams));
  }

  vm.update = infoUpdate;
}
