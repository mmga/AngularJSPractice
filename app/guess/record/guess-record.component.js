'use strict';

angular.module('guess')
    .component('guessRecordList', {
        templateUrl: 'guess/record/guess-record.template.html',
        controller: ['$scope', 'guess.service', function ($scope, guessService) {
            let self = this;
            self.records = guessService.records
        }]
    });