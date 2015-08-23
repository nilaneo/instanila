(function() {
    'use strict';

    var module = angular.module('instanila', [
        'ui.router',
        'instanila.components.hashtagGroupsList',
        'instanila.components.hashtagGroupsManage'
    ]);

    module.run(['$state', function($state) {
        $state.go('hashtag-groups');
    }]);
})();
