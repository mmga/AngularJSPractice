angular
    .module('guess')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/guess', {
                template: '<guess></guess>'
            })

        }
    ])