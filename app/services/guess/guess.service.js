'use strict';

angular
    .module('guess.service')
    .factory('guess.service',
        ['httpService', 'globalParams', 'eventBus',
            function (httpService, globalParams, eventBus) {

                let records = [];
                let currentWord = '';

                let startGame = function startGame() {
                    httpService.start()
                        .then(function (response) {
                                console.log('response', response);
                                let {data: {word, sessionId}} = response;
                                console.log(word, sessionId);
                                globalParams.session = sessionId;
                                eventBus.post(eventBus.eventType.GUESS_RESULT, word);
                                currentWord = word;
                                records = [];
                            },
                            function (reject) {
                                console.log('reject', reject);

                            })
                };

                let guessWord = function guessWord(char) {
                    httpService.guess(char)
                        .then(function (response) {
                                console.log('response', response);
                                if (response.status === 200) {
                                    let {config: {data: {char}}, data: {word}} = response;

                                    currentWord = calResult(currentWord, word);
                                    console.log('currentWord', currentWord);
                                    eventBus.post(eventBus.eventType.GUESS_RESULT, currentWord);

                                    records.push({char, word, currentWord});
                                    eventBus.post(eventBus.eventType.GUESS_RECORD, records);
                                }
                            },
                            function (reject) {
                                console.log('reject', reject);
                            })
                };

                function calResult(currentWord, word) {
                    let result = '';
                    for (let i = 0; i < currentWord.length; i++) {
                        result += (currentWord[i] !== '*') ? currentWord[i] : word[i];
                    }
                    console.log('result', result);
                    return result;
                }

                return {
                    records,
                    startGame,
                    guessWord,
                }
            }]);