(function() {
    'use strict';

    angular.module('instanila').config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/hashtag-groups', {
                templateUrl: 'components/hashtag-groups-list/hashtag-groups-list.html',
                controller: 'HashtagGroupsListController'
            });
    }]);



    angular.module('instanila').controller('HashtagGroupsListController', ['$scope', 'hashtagGroupsService', function($scope, hashtagGroupsService) {
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
