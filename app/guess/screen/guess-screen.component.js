'use strict';

angular.module('guess')
    .component('guessScreen', {
        templateUrl: 'guess/screen/guess-screen.template.html',
        controller: ['$scope', 'eventBus', function ($scope, eventBus) {
            let self = this;
            self.currentWord = '点击[开始游戏]'

            // $rootScope.$on('updateGuessResult',function (event,data) {
            //     console.debug(data);
            //     self.currentWord = data;
            // })

            let event = eventBus.eventType.EVENT_GUESS_RESULT;
            eventBus.subscribe(event,
                function (event, data) {
                    console.log(data);
                    self.currentWord = data;
                })

        }]
    });