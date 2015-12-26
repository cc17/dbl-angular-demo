var module = angular.module('app.services');
module.factory('homeRequest', ['$http', function($http) {
    var xhrRequests = {
        fetchMainList: function(options){
            return $http({
              method: 'GET',
              url: '/home.json'
            });
        }
    }
    return xhrRequests;
  }])