angular.module('router', ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', { templateUrl: './pages/landingPage.html' })
      .when('/about', { 
        templateUrl: "./pages/aboutPage.html",
        controller: 'abtCtrl',
        controllerAs: 'vm'  
      })
      .when('/work', { 
        templateUrl: "./pages/workPage.html",
        controller: 'workCtrl',
        controllerAs: 'work'
      })
  })