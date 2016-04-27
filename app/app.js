'use strict';

// Declare app level module which depends on views, and components
angular.module('pizzApp', [
    'ngRoute',
    'ui.bootstrap',
    'pizzApp.pizza.list',
    'pizzApp.pizza.details',
    'pizzApp.pizza',
    'pizzApp.navigation'
])

// Configs
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/pizzas'});
}]);
