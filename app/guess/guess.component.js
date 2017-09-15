'use strict';

angular.module('guess')
    .component('guess', {
        templateUrl: 'guess/guess.template.html',
        controller: ['httpService', function (httpService) {
            let self = this;

            self.doStart = function doStart() {
                httpService.start()
                    .then(function (response) {
                            console.log('response', response);
                        },
                        function (reject) {
                            console.log('reject', reject);

                        })

            }
        }]
    });