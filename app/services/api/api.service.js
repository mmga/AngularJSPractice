'use strict';

angular
    .module('api')
    .factory('httpService', [
        '$http', 'localStorage', 'globalParams', function ($http, localStorage, globalParams) {

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
                let token = localStorage.getItem('token');
                return $http({
                    method: 'POST',
                    url: 'http://job.cloudist.cc:8888/start',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    data: {}
                });
            }

            function guess(char) {
                let token = localStorage.getItem('token');
                let session = globalParams.session;
                return $http({
                    method: 'POST',
                    url: 'http://job.cloudist.cc:8888/guess',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token,
                    },
                    data: {
                        'sessionId': session,
                        'char': char
                    }
                });
            }

            return {
                login,
                start,
                guess,
            }
        }
    ]);