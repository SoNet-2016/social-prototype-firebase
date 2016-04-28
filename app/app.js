'use strict';

// Declare app level module which depends on views, and components
angular.module('pizzApp', [
    'ngRoute',
    'ui.bootstrap',
    'firebase',
    'pizzApp.pizza.list',
    'pizzApp.pizza.details',
    'pizzApp.pizza',
    'pizzApp.navigation'
])

// Config
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/pizzas'});
}])

// TODO: Insert the Firebase address
.constant('FBURL', 'social-prototype-fb.firebaseio.com');
