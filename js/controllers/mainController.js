angular.module('mainController', ['mainService'])
  .controller('mainCtrl', function(mainSvc, $rootElement){
    const vm = this;
    this.toggleThing = function(){
      console.log($scope);
      this.toggledThing = !this.toggledThing
    }
  })
  