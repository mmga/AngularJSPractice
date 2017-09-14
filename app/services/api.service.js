'use strict';

angular
    .module('api')
    .factory('remote', [
        '$http', function ($http) {

            function login(email) {
                $http.post('http://job.cloudist.cc:8888/login', {email: email})
                    .then(function (response) {
                        console.log(response)
                    })
            }


            return {
                login
            }
        }
    ]);