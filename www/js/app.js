
var app = angular.module("happ", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "views/home.html",
            controller: "HomeCtrl"}
        )
        .otherwise({redirectTo: '/home'})
    ;
}]);

