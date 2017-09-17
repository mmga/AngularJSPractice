'use strict';

angular.module('guess')
    .component('guessRecordList', {
        templateUrl: 'guess/record/guess-record.template.html',
        controller: ['$scope', 'guess.service', 'eventBus', function ($scope, guessService, eventBus) {
            let self = this;

            eventBus.subscribe(eventBus.eventType.GUESS_RECORD, function (event, data) {
                let tempRecords = [];
                let recordItem;
                for (let i = 0; i < data.length; i++) {
                    recordItem = {guessChar: data[i].char, word: data[i].word, resultWord: data[i].currentWord};
                    tempRecords.push(recordItem);
                }
                console.log(tempRecords);
                self.records = tempRecords;
            });
        }]
    });