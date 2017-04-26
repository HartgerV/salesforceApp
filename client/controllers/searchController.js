angular.module('AD.controller.search', ['ngRoute'])
    .controller('AD.controller.search', ['$scope', '$http', '$timeout', '$location', 'API', 'Force', function ($scope, $http, $timeout, $location, API, Force) {

        $http.get('http://localhost:8200/appid').then(function(result) {
            // Initialize forcejs for that Connected app
            Force.init({
                appId: result.data.appId
            });
            // Login
            Force.login(function() {
                var soql = "SELECT Id, Name FROM Session__c";
                Force.query(soql, function(data){console.log(data)}, function(data){console.log(data)} );},
                function (error) {
                alert('Login failed: ' + error);
                });
        });


        $scope.openCompany = function(companyId) {
            $location.path('/company/'+companyId);
        };
    }]);

