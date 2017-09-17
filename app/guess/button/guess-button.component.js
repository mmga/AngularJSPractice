'use strict';

angular.module('guess')
    .component('guessButton', {
        templateUrl: 'guess/button/guess-button.template.html',
        controller: ['guess.service', function (guessService) {
            let self = this;

            self.textBtnStart = '开始游戏';

            self.doStart = function () {
                guessService.startGame();
                self.textBtnStart = '重新开始';
            };

            self.invalidateResult = function () {
                guessService.validateResult();
            };
        }]
    });