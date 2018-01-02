angular.module('aboutService', ['dataStoreService'])
  .factory('abtSvc', function($http, dataStore){
    // API call for random users
    const getPeopleFetch = function(){
      return $http.get('https://randomuser.me/api/?results=5')
    }
    return {
      getPeopleFetch
    }
  })