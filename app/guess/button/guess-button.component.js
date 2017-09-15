'use strict';

angular.module('guess')
    .component('guessButton', {
        templateUrl: 'guess/button/guess-button.template.html',
        controller: ['guess.service', function (guessService) {
            let self = this;
            self.doStart = function doStart() {
                guessService.startGame();
            }
        }]
    });