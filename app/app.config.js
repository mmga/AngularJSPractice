'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [])
    .config(['$locationProvider', '$routeProvider', '$httpProvider',
        function config($locationProvider, $routeProvider, $httpProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/login', {
                    template: '<login></login>'
                })
                .otherwise('/login');

            //todo 为啥不好使？
            // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        }
    ]);
