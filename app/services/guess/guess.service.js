'use strict';

angular
    .module('guess.service')
    .factory('guess.service',
        ['httpService', 'globalParams', function (httpService, globalParams) {

            let records = [];
            let currentWord = '';

            let startGame = function startGame() {
                httpService.start()
                    .then(function (response) {
                            console.log('response', response);
                            let {data: {word, sessionId}} = response;
                            console.log(word, sessionId);
                            globalParams.session = sessionId;
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
                                let {config: {data: {char}}, data: {word}} = response
                                records.push([{char, word}]);
                                console.log('records = ', records);
                                console.log(word);
                                if (currentWord === '') {
                                    currentWord = word;
                                } else {
                                    currentWord = calResult(currentWord, word)
                                }
                                console.log('currentWord', currentWord);

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
                console.log('result', result)
                return result;
            }

            return {
                records,
                startGame,
                guessWord,
            }
        }]);