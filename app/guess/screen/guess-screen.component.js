'use strict';

angular.module('guess')
    .component('guessScreen', {
        templateUrl: 'guess/screen/guess-screen.template.html',
        controller: ['$scope', function ($scope) {
            let self = this;
            self.currentWord = '点击[开始游戏]'
        }]
    });