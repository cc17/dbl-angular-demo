angular.module('app.controllers').controller('homeController',[
  '$scope',
  'homeRequest',
  function($scope,homeRequest){
  var vm = this;
  var home = {
    name:'cc',
    changeName:function(){
      alert(1);
    }
  };
  angular.extend(vm,home);

  homeRequest.fetchMainList().then(function(res){
    vm.ajaxData = res.data.data;
  });

}]);