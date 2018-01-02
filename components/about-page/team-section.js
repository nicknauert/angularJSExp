angular.module('core')
  .component('teamSection', {
    templateUrl: "./components/about-page/team-section.html",
    bindings: {
      people: '<'
    },
    controller: function(){},
    controllerAs: 'vm'
    
  })