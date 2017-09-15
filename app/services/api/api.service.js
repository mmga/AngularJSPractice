'use strict';

angular
    .module('api')
    .factory('remote', [
        '$http', function ($http) {

            function login(email) {
                return $http({
                    method: 'POST',
                    url: 'http://job.cloudist.cc:8888/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {'email': email}
                });
            }

            return {
                login
            }
        }
    ]);