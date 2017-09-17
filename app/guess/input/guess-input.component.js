'use strict';

angular.module('guess')
    .component('guessInput', {
        templateUrl: 'guess/input/guess-input.template.html',
        controller: ['$scope', 'guessService', function ($scope, guessService) {
            let self = this;

            self.doGuess = function doGuess() {
                guessService.guessWord(self.inputChar);
                self.inputChar = ''
            };
        }]
    });