angular.module('core')
  .component('userList', {
    controller: function() {},
    controllerAs: 'list',
    templateUrl: 'components/user-list/user-list.html',
    bindings: {
      people: '<'
    }
  })