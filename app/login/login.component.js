'use strict';

angular
    .module('login')
    .component('login', {
        templateUrl: 'login/login.template.html',
        controller: ['httpService', 'localStorage', '$scope', '$location',
            function (httpService, localStorage, $scope, $location) {
                let self = this;

                self.doLogin = function doLogin() {
                    httpService.login($scope.email)
                        .then(function (response) {
                                localStorage.setItem('token', response.data.token)
                                $location.path('/guess');
                            },
                            function (reject) {
                                let {status, data: {error}} = reject
                                alert([status, error])
                            });
                };

            }]
    });
