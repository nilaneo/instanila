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

    module.controller('HashtagGroupsListController', ['$ionicPlatform', '$state', 'hashtagGroupsService', function($ionicPlatform, $state, hashtagGroupsService) {
        var vm = this;

        vm.hashtagGroups = hashtagGroupsService.getAllGroups();
        vm.copy = copy;
        vm.edit = edit;

        //////////

        function copy($event, hashtags) {
            $event.stopPropagation();
            $ionicPlatform.ready(function() {
                if(window.cordova && window.cordova.plugins.clipboard) {
                    cordova.plugins.clipboard.copy(hashtags);
                }
            });
        }

        function edit (hashtagGroup) {
            $state.go('hashtag-groups-edit', {
                id: hashtagGroup.$id
            });
        }

    }]);
}());
