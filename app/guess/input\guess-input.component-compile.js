'use strict';

angular.module('guess').component('guessInput', {
    templateUrl: 'guess/input/guess-input.template.html',
    controller: ['$scope', 'guess.service', function ($scope, guessService) {
        var self = this;

        self.doGuess = function doGuess() {
            guessService.guessWord(self.inputChar);
        };
    }]
});

//# sourceMappingURL=input\guess-input.component-compile.js.map