'use strict';

angular.module('guess').component('guessButton', {
    templateUrl: 'guess/button/guess-button.template.html',
    controller: ['guess.service', function (guessService) {
        var self = this;
        self.doStart = function doStart() {
            guessService.startGame();
        };
    }]
});
//# sourceMappingURL=guess-button.component.js.map