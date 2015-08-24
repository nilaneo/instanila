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

    module.controller('HashtagGroupsListController', ['hashtagGroupsService', function(hashtagGroupsService) {
        var vm = this;

        vm.hashtagGroups = hashtagGroupsService.getAllGroups();
        vm.deleteHashtagGroup = deleteHashtagGroup;

        //////////

        function deleteHashtagGroup(hashtagGroup) {
            if (window.confirm('Do you really want to delete this hashtag group?')) {
                hashtagGroupsService.deleteGroup(hashtagGroup);
            }
        };

    }]);
}());
