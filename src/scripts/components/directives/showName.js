var module = angular.module('app.directives');

module.directive('showName',function(){
  return {
    restrict:'AE',
    link:function(scope,elem){
      elem.html('这是测试');
    }
  };
});