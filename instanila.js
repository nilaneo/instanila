(function() {
    'use strict';

    var module = angular.module('instanila', [
        'ngRoute',
        'instanila.components.hashtagGroupsList',
        'instanila.components.hashtagGroupsManage'
    ]);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/hashtag-groups'
            });
    }]);
})();
