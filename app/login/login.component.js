'use strict';

angular
    .module('login')
    .component('login', {
        templateUrl: 'login/login.template.html',
        controller: ['remote', '$scope', function (remote, $scope) {
            console.log('111');
            let self = this;

            self.doLogin = function doLogin() {
                remote.login($scope.email)
            };

        }]
    });
