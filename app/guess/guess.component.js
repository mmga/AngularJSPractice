'use strict';

angular.module('guess')
    .component('guess', {
        templateUrl: 'guess/guess.template.html',
        controller: ['httpService', 'localStorage', '$scope', function (httpService, localStorage, $scope) {
            $scope.text = 'has controlled'
        }]
    });