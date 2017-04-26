var app = angular.module('AD.config.router', ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/company/:companyId', {
            controller: 'AD.controller.company',
            templateUrl: './views/companyView.html'
        });
        $routeProvider.when('/search', {
            controller: 'AD.controller.search',
            templateUrl: './views/searchView.html'
        });
        $routeProvider.otherwise({redirectTo: '/search'});
    }]);











