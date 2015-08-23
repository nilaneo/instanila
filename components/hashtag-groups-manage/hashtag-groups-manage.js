(function() {
    'use strict';

    var module = angular.module('instanila.components.hashtagGroupsManage', [
        'ui.router',
        'instanila.common.hashtagGroupsService'
    ]);

    module.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('hashtag-groups-new', {
                templateUrl: 'components/hashtag-groups-manage/hashtag-groups-manage.html',
                controller: 'HashtagGroupsManageController'
            })
            .state('hashtag-groups-edit', {
                templateUrl: 'components/hashtag-groups-manage/hashtag-groups-manage.html',
                controller: 'HashtagGroupsManageController'
            });
    }]);

    module.controller('HashtagGroupsManageController', ['$scope', '$state', '$stateParams', 'hashtagGroupsService', function($scope, $state, $stateParams, hashtagGroupsService) {
        $scope.hashtagGroup = _getHashtagGroup();
        $scope.onHashtagGroupFormSubmit = onHashtagGroupFormSubmit;

        //////////

        function onHashtagGroupFormSubmit() {
            if($scope.hashtagGroupForm.$valid) {
                hashtagGroupsService.saveGroup($scope.hashtagGroup);
                $state.go('hashtag-groups');
            } else {
                window.alert('Name and Hashtags are required fields');
            }
        }

        function _getHashtagGroup () {
            if($stateParams.id) {
                return hashtagGroupsService.getGroup($stateParams.id);
            } else {
                return {name: '', hashtags: ''};
            }
        }
    }]);

}());
