angular.module('workService', ['dataStoreService'])
  .service('workSvc', function($filter, dataStore){

    // Switch functions //////////////
    let bools = {
      one: true,
      two: true,
      three: true
    } 

    this.toggleBoolService = (bool) => {
      bools[bool] = !bools[bool]
      console.log("SVC", bools);
    }

    // Filter functions //////////////
    this.getDate = function(){
      let currentDate = new Date();
      return $filter('date')(currentDate, 'medium');
    }

    this.getJson = function(object){
      return $filter('json')(object);
    }

    // Form Validator for card //////////////
    this.validateForm = function(form){
      console.log(form);
      if(form.name && form.email && form.nickName && form.telephone){
        console.log("Form Subbed");
        return true;
      } else if (!form.name){
        return 'At least try to fill it out :('
      } else if (!form.nickName){
        return "I won't tell anyone, Danger Zone."
      } else if (!form.email){
        return "I promise not to send you my book club recommendations."
      } else if (!form.telephone){
        return "I just want this because I'm out of ideas."
      }
    }
  })