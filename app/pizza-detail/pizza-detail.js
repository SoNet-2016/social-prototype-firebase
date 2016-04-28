'use strict';

angular.module('pizzApp.pizza.details', ['ngRoute', 'pizzApp.pizza'])

// Route Config    
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pizzas/:pizzaId', {
        templateUrl: 'pizza-detail/pizza-detail.html',
        controller: 'PizzaDetailCtrl'
    });
}])

// Controller
.controller('PizzaDetailCtrl', ['$scope', '$routeParams', 'Pizza',
    function($scope, $routeParams, Pizza) {
        $scope.pizza = Pizza.getPizza($routeParams.pizzaId);
}]);