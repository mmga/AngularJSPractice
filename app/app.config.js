'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider, $httpProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/login', {
                    template: '<login></login>'
                })
                .when('/guess', {
                    template: '<guess></guess>'
                })
                .otherwise('/login');

        }
    ]);
