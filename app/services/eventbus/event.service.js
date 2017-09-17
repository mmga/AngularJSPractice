'use strict';

angular.module('eventBus')
    .factory('eventBus', ['$rootScope', function ($rootScope) {

        const eventType = {
            GUESS_RESULT:'guess_result',
            GUESS_RECORD:'guess_record'
        };

        function post(event, data) {
            $rootScope.$broadcast(event, data);
        }

        function subscribe(event, listener) {
            $rootScope.$on(event, listener);
        }

        return {
            eventType,
            post,
            subscribe,
        }
    }]);