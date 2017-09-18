angular
    .module('login')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/login', {
                template: '<login></login>'
            })
        }
    ])