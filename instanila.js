(function() {
    'use strict';

    angular.module('instanila', [
        'ngRoute'
    ]);

    angular.module('instanila').config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/hashtag-groups'
            });
    }]);
})();
