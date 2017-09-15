'use strict';

angular.module('guess')
    .component('guessButton', {
        templateUrl: 'guess/button/guess-button.template.html',
        controller: ['httpService', function (httpService) {
            let self = this;
            console.log('222');
            self.doStart = function doStart() {
                httpService.start()
                    .then(function (response) {
                            console.log('response', response);
                            let {word, sessionId} = response;
                            console.log(word, sessionId);
                        },
                        function (reject) {
                            console.log('reject', reject);

                        })

            }
        }]
    });