'use strict';

angular.module('guess')
    .component('guessInput', {
        templateUrl: 'guess/input/guess-input.template.html',
        controller: ['$scope', 'guessService', 'eventBus', function ($scope, guessService, eventBus) {
            let self = this;

            self.doGuess = function doGuess() {
                guessService.guessWord(self.inputChar);
                self.inputChar = ''
            };

            eventBus.subscribe(eventBus.eventType.GUESS_RESET, function () {
                self.inputChar = ''
            })
        }]
    });