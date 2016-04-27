'use strict';

angular.module('pizzApp.pizza.service', [])

.factory('Pizza', function($http) {
    var pizzaService = {
        getData: function (id) {
            return $http.get('../data/' + id + '.json').then(function (response) {
                return response.data;
            });
        }
    }
    return pizzaService;
});