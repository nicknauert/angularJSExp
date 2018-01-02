angular.module('dataStoreService', [])
  .service('dataStore', function(){
    
    //This service acts as a data store to hold info between page changes
    this.info = {}; 

    // Return current data store.
     this.getData = function(){
      return this.info;
    }
     this.getDataKey = function(key){
      return this.info[key];
    }

    // Save new data to the store object.
    // Key should be a string, and value is whatever data you want to store.
     this.saveData = function(key, value){
      console.log('SAVING NEW DATA'); // Just to keep track of when new data is saved for debugging purposes
      this.info[key] = value;
    }
  })