require('angular');
require('angular-ui-router');

//help函数,加载某个目录下所有的文件
function requireAll(r) {
  var keys = r.keys() ;
  for(var i = 0,len = keys.length;i<len;i++){
    r(keys[i]);
  }
}

//注册module
requireAll(require.context('./components/modules', true, /\.js$/) );

var module = angular.module('app',[
  'ui.router',
  'app.controllers',
  'app.routes',
  'app.directives',
  'app.filters',
  'app.services'
]);


//导入所有directive下的文件
requireAll(require.context('./components/directives', true, /\.js$/) );

//导入所有filters下的文件
requireAll(require.context('./components/filters', true, /\.js$/) );
//导入所有services下的文件
requireAll(require.context('./components/services', true, /\.js$/) );

//启动路由
requireAll(require.context('./components/routes', true, /\.js$/) );


angular.element(document).ready(function(){
  angular.bootstrap(document, ['app']);
});
