'use strict';

var _test = require('test.js');

angular.module('guess').component('guessButton', {
    templateUrl: 'guess/button/guess-button.template.html',
    controller: ['guess.service', function (guessService) {
        var self = this;
        self.doStart = function doStart() {
            guessService.startGame();
            _test.a;
        };
    }]
});
//# sourceMappingURL=guess-button.component.js.map
//# sourceMappingURL=guess-button.component.js.map
//# sourceMappingURL=guess-button.component.js.map