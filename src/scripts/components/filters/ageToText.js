var module = angular.module('app.filters');
module.filter('ageToText',function(){
  return function(age){
    return '壹拾捌';
  }
});