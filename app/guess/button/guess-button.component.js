'use strict';

angular.module('guess')
    .component('guessButton', {
        templateUrl: 'guess/button/guess-button.template.html',
        controller: ['guessService', function (guessService) {
            let self = this;

            self.textBtnStart = '开始游戏';
            self.textBtnAuto = '自动打怪';

            self.doStart = function () {
                reset();
                guessService.startGame();
            };

            self.invalidateResult = function () {
                guessService.validateResult();
            };

            self.autoPlay = function () {
                if (self.textBtnAuto === '自动打怪') {
                    guessService.autoPlayStart();
                    self.textBtnAuto = '暂停';
                } else {
                    pauseAutoPlay();
                }
            };

            function pauseAutoPlay() {
                guessService.autoPlayPause();
                self.textBtnAuto = '自动打怪';
            }

            function reset() {
                pauseAutoPlay();
                self.textBtnStart = '重新开始';
            }
        }]
    });