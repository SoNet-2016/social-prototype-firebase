'use strict';

angular.module('pizzApp.pizza.list', ['ngRoute', 'pizzApp.pizza'])

// Route Config
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pizzas', {
        templateUrl: 'pizza-list/pizza-list.html',
        controller: 'PizzaListCtrl'
    });
}])

// Controller
.controller('PizzaListCtrl', ['$scope', 'Pizza',
    function($scope, Pizza) {
        $scope.pizzas = Pizza.getPizzas();
        $scope.orderProp = 'id';
}]);