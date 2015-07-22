(function() {
    'use strict';

    angular.module('instanila').config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/hashtag-groups/new', {
                templateUrl: 'components/hashtag-groups-manage/hashtag-groups-manage.html',
                controller: 'HashtagGroupsManageController'
            })
            .when('/hashtag-groups/:id', {
                templateUrl: 'components/hashtag-groups-manage/hashtag-groups-manage.html',
                controller: 'HashtagGroupsManageController'
            });
    }]);

    angular.module('instanila').controller('HashtagGroupsManageController', ['$scope', '$location', '$routeParams', 'hashtagGroupsService', function($scope, $location, $routeParams, hashtagGroupsService) {
        $scope.hashtagGroup = _getHashtagGroup();
        $scope.onHashtagGroupFormSubmit = onHashtagGroupFormSubmit;

        //////////

        function onHashtagGroupFormSubmit() {
            if($scope.hashtagGroupForm.$valid) {
                hashtagGroupsService.saveGroup($scope.hashtagGroup);
                $location.path('/hashtag-groups');
            } else {
                window.alert('Name and Hashtags are required fields');
            }
        }

        function _getHashtagGroup () {
            if($routeParams.id) {
                return hashtagGroupsService.getGroup($routeParams.id);
            } else {
                return {name: '', hashtags: ''};
            }
        }
    }]);

}());
