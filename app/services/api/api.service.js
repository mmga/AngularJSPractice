'use strict';

angular
    .module('api')
    .factory('httpService', [
        '$http', 'localStorage', function ($http, localStorage) {

            let token = localStorage.getItem('token');

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

            function start() {
                return $http({
                    method: 'POST',
                    url: 'http://job.cloudist.cc:8888/start',
                    headers: {
                        'Content-Type': 'application/json',
                        'token':token
                    },
                    data:{}
                });
            }

            return {
                login,
                start,
            }
        }
    ]);