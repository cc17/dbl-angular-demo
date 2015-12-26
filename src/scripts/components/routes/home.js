require('../controllers/homeController');
angular.module('app.routes')
  .config(function($stateProvider,$urlRouterProvider){ 
    $stateProvider.state("home", {
        resolve: {},
        url: "/",
        controller: 'homeController',
        templateUrl: 'scripts/components/views/home.html',
        controllerAs: 'home'
    });
    $urlRouterProvider.otherwise('/');
})