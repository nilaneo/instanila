(function() {
    'use strict';

    var module = angular.module('instanila.components.hashtagGroupsList', [
        'ui.router',
        'instanila.common.hashtagGroupsService'
    ]);

    module.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('hashtag-groups', {
                templateUrl: 'js/components/hashtag-groups-list/hashtag-groups-list.html',
                controller: 'HashtagGroupsListController as vm'
            });
    }]);

    module.controller('HashtagGroupsListController', ['$ionicPlatform', 'hashtagGroupsService', function($ionicPlatform, hashtagGroupsService) {
        var vm = this;

        vm.hashtagGroups = hashtagGroupsService.getAllGroups();
        vm.deleteHashtagGroup = deleteHashtagGroup;
        vm.copy = copy;

        //////////

        function deleteHashtagGroup(hashtagGroup) {
            if (window.confirm('Do you really want to delete this hashtag group?')) {
                hashtagGroupsService.deleteGroup(hashtagGroup);
            }
        };

        function copy(hashtags) {
            $ionicPlatform.ready(function() {
                if(window.cordova && window.cordova.plugins.clipboard) {
                    cordova.plugins.clipboard.copy(hashtags);
                }
            });
        };

    }]);
}());
