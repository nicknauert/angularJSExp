angular.module('mainController', ['mainService'])
  .controller('mainCtrl', function(mainSvc){
    const vm = this;
    this.toggleThing = function(){
      console.log($scope);
      this.toggledThing = !this.toggledThing
    }
})
  .filter('truncate', function(){
    return function(post){
      return post.substring(0, 49) + "..."
    }
  })