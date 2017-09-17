'use strict';

angular.module('eventBus')
    .factory('eventBus', ['$rootScope', function ($rootScope) {

        const eventType = {
            EVENT_GUESS_RESULT:'event_guess_result',
            EVENT_GUESS_RECORD:'event_guess_record'
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