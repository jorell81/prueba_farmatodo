var app = angular.module("marvelApp", ['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {


    $routeProvider.when('/#', {
        templateUrl: "index.html",
        controller: "appController"
    });

    $routeProvider.when('/pagina2', {
        templateUrl: "pagina2.html",
        controller: "Pagina2Controller"
    });

    $routeProvider.when('/pagina3', {
        templateUrl: "pagina3.html",
        controller: "Pagina3Controller"
    });

    $routeProvider.when('/pagina4', {
        templateUrl: "pagina4.html",
        controller: "Pagina4Controller"
    });

    $routeProvider.otherwise({
        redirectTo: '/#'
    });

}]);


app.controller("Pagina1Controller", ['$scope',function($scope) {


}]);

app.controller("Pagina2Controller", ["$scope",function($scope) {

    //$scope.mensaje="Texto cargado desde el controlador Pagina2Controller";
}]);


app.controller("Pagina3Controller", ["$scope","$http",function($scope,$http) {

}]);
