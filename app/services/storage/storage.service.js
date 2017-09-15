'use strict';

angular
    .module('localStorage')
    .factory('localStorage', function () {

            function getItem(key) {
                const object = window.localStorage.getItem(key)

                try {
                    return JSON.parse(object)
                } catch (e) {
                    switch (object) {
                        case 'undefined':
                            return undefined
                        case 'null':
                            return null
                        default:
                            return object
                    }
                }
            }

            function setItem(key, object) {
                if (object instanceof Object) {
                    window.localStorage.setItem(key, JSON.stringify(object))
                } else {
                    window.localStorage.setItem(key, object)
                }
            }

            function removeItem(key) {
                window.localStorage.removeItem(key)
            }

            return {
                getItem,
                setItem,
                removeItem
            }
        }
    );