(function(module){ 
 angular
    .module(module.name, ['ui.router'].concat(module.dependencies))
    .config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider){
        stateProvider
            .state(module.name, {
                url: '/app',
                templateUrl: module.path + '/views/layout.html'
            });

        urlRouterProvider.otherwise("/app/child");
    }]);

window.addEventListener('load', function(){
	angular.bootstrap(document, [module.name]);
}); 
  
  
  
  
 })({"name":"app","path":"\\modules\\app","dependencies":["app.child"]});
(function(module){ 
 angular
    .module(module.name, module.dependencies)
    .config(['$stateProvider', function(stateProvider){
        stateProvider
            .state(module.name, {
                url: '/child',
                templateUrl: module.path + '/views/layout.html'
            });
    }]); 
  
  
  
  
 })({"name":"app.child","path":"\\modules\\app.child","dependencies":[]});