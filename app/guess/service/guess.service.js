'use strict';

angular
    .module('guess.service')
    .factory('guessService',
        ['httpService', 'globalParams', 'eventBus',
            function (httpService, globalParams, eventBus) {

                let records = [];
                let currentWord = '';
                let guessedChar = []; // 记录已猜过的词
                let isAutoPlay = false;


                let startGame = function startGame() {
                    eventBus.post(eventBus.eventType.GUESS_RESET);

                    httpService.start()
                        .then(function (response) {
                                let {data: {word, sessionId}} = response;
                                resetCache();
                                globalParams.session = sessionId;
                                eventBus.post(eventBus.eventType.GUESS_RESULT, word);
                                currentWord = word;
                            },
                            function (reject) {
                                console.log('reject', reject);

                            })
                };

                function resetCache() {
                    records = [];
                    guessedChar = [];
                    isAutoPlay = false;
                }

                let guessWord = function guessWord(char) {
                    httpService.guess(char)
                        .then(function (response) {
                                if (response.status === 200) {
                                    let {config: {data: {char}}, data: {word}} = response;

                                    // guess
                                    currentWord = calResult(currentWord, word);
                                    eventBus.post(eventBus.eventType.GUESS_RESULT, currentWord);

                                    // record
                                    records.push({char, word, currentWord});
                                    eventBus.post(eventBus.eventType.GUESS_RECORD, records);

                                    //autoplay
                                    guessedChar.push(char);
                                    if (isAutoPlay && currentWord.indexOf('*') !== -1) {
                                        setTimeout(function () {
                                            autoPlay();
                                        }, 200)
                                    }
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
                    return result;
                }

                function validateResult() {
                    httpService.result(currentWord)
                        .then(function (response) {
                                alert(response.data);
                            },
                            function (reject) {
                                console.log(reject);
                            })
                }


                const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

                function autoPlayStart() {
                    isAutoPlay = true;
                    autoPlay();
                }

                function autoPlayPause() {
                    isAutoPlay = false;
                }

                function autoPlay() {
                    let rest = R.difference(alphabet, guessedChar);
                    guessWord(R.head(rest));
                }

                return {
                    records,
                    startGame,
                    guessWord,
                    validateResult,
                    autoPlayStart,
                    autoPlayPause
                }
            }]);