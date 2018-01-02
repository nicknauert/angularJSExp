angular.module('workController', ['workService', 'dataStoreService'])
  .controller('workCtrl', function( $scope, workSvc, dataStore) {
    const work = this

    // Switch functions

    work.getBoolObj = {
      one: true,
      two: true,
      three: true
    } 
    work.toggleBool = (bool)=>{
      let newObj = work.getBoolObj;
      newObj[bool] = !newObj[bool];
      work.getBoolObj = newObj;
    }
    

    // Use filters for various displays
    work.displayDate = workSvc.getDate();
    work.controllerObject = workSvc.getJson(work);
    
    // Handle creating a user badge;
    work.cardCreated = false;
    work.form = {};
    work.error = "";
    work.createBadge = function(){
      let validated = workSvc.validateForm(work.form)
      if(validated === true){
        work.cardCreated = !work.cardCreated;
      } else {
        work.error = validated;
      }
    }

    work.paragraph = "Truncating a long paragraph because sometimes you just Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, illo? Dolor eligendi provident accusantium consectetur nihil pariatur veritatis, deleniti est sunt assumenda officiis quod. Obcaecati omnis repellendus magnam ullam adipisci"

  })
  .filter('truncate', function(){
    return function(post){
      return post.substring(0, 49) + "..."
    }
  })