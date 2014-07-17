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