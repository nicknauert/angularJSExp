angular.module('aboutController', ['aboutService', 'dataStoreService'])
  .controller('abtCtrl', [ '$scope', 'abtSvc', 'dataStore', function($scope, abtSvc, dataStore){
    const vm = this;

    // Refresh the global store with our stored data so that it persists on re-route.
    // The idea is that any component that will need access to global variables will do
    // the following to place stored data into global scope.
    $scope.store = dataStore.getData();

    // Check to see if we have made the api call for users yet
    // If not, do it and save it to the dataStore
    // let currentData = dataStore.getData()
    if(!$scope.store.people){
      abtSvc.getPeopleFetch()
        .then( res => {
          dataStore.saveData('people', res.data.results);
          $scope.store = dataStore.getData() //update global scope store with new dataStore
          vm.people = $scope.store.people
        })
    } else {
      vm.people = $scope.store.people // apply store.people to the controller object for display
    }
    
  }])