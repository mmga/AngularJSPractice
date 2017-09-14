'use strict';

angular
    .module('login')
    .component('login', {
        templateUrl: 'login/login.template.html',
        controller: ['remote', '$rootScope', function (remote, $scope) {
            console.log('111');
            this.doLogin = function doLogin() {
                let self = this
                console.log('233');
                this.remote.login(self.$scope.email)
                    .then(function (response) {
                        console.log(response);
                    })
            };

        }]
    });
