(function() {
    'use strict';

    var module = angular.module('instanila.components.hashtagGroupsList', [
        'ui.router',
        'instanila.common.hashtagGroupsService'
    ]);

    module.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('hashtag-groups', {
                templateUrl: 'components/hashtag-groups-list/hashtag-groups-list.html',
                controller: 'HashtagGroupsListController'
            });
    }]);

    module.controller('HashtagGroupsListController', ['$scope', 'hashtagGroupsService', function($scope, hashtagGroupsService) {
        $scope.hashtagGroups = hashtagGroupsService.getAllGroups();
        $scope.deleteHashtagGroup = deleteHashtagGroup;

        //////////

        function deleteHashtagGroup(hashtagGroup) {
            if (window.confirm('Do you really want to delete this hashtag group?')) {
                hashtagGroupsService.deleteGroup(hashtagGroup);
            }
        };

    }]);
}());
