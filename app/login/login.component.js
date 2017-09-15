'use strict';

angular
    .module('login')
    .component('login', {
        templateUrl: 'login/login.template.html',
        controller: ['remote', 'localStorage', '$scope', function (remote, localStorage, $scope) {
            let self = this;

            self.doLogin = function doLogin() {
                remote.login($scope.email)
                    .then(function (response) {
                            localStorage.setItem('token', response.data.token)

                        },
                        function (reject) {
                            let {status, data: {error}} = reject
                            alert([status, error])
                        });
            };

        }]
    });
