'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/login', {
                    template: '<login></login>'
                })
                .otherwise('/login');
        }]);
