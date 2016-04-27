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
        Pizza.getData($routeParams.pizzaId).then(function(data) {
            $scope.pizza = data;
        });
}]);