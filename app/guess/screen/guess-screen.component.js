'use strict';

angular.module('guess')
    .component('guessScreen', {
        templateUrl: 'guess/screen/guess-screen.template.html',
        controller: ['$scope', 'eventBus', function ($scope, eventBus) {
            let self = this;
            self.currentWord = '点击[开始游戏]';

            eventBus.subscribe(eventBus.eventType.GUESS_RESULT,
                function (event, data) {
                    self.currentWord = data;
                })

            eventBus.subscribe(eventBus.eventType.GUESS_RESET, function () {
                // self.currentWord = '';
            });
        }]
    });