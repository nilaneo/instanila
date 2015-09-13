(function() {
    'use strict';

    var module = angular.module('instanila.components.hashtagGroupsManage', [
        'ui.router',
        'instanila.common.hashtagGroupsService'
    ]);

    module.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('hashtag-groups-new', {
                templateUrl: 'js/components/hashtag-groups-manage/hashtag-groups-manage.html',
                controller: 'HashtagGroupsManageController as vm'
            })
            .state('hashtag-groups-edit', {
                params: {
                    id: null
                },
                templateUrl: 'js/components/hashtag-groups-manage/hashtag-groups-manage.html',
                controller: 'HashtagGroupsManageController as vm'
            });
    }]);

    module.controller('HashtagGroupsManageController', ['$state', '$stateParams', 'hashtagGroupsService', function($state, $stateParams, hashtagGroupsService) {
        var vm = this;

        vm.hashtagGroup = _getHashtagGroup();
        vm.deleteHashtagGroup = deleteHashtagGroup;
        vm.onHashtagGroupFormSubmit = onHashtagGroupFormSubmit;

        //////////

        function onHashtagGroupFormSubmit() {
            if(vm.hashtagGroupForm.$valid) {
                hashtagGroupsService.saveGroup(vm.hashtagGroup);
                $state.go('hashtag-groups');
            } else {
                window.alert('Name and Hashtags are required fields');
            }
        }

        function deleteHashtagGroup() {
            if (window.confirm('Do you really want to delete this hashtag group?')) {
                hashtagGroupsService.deleteGroup(vm.hashtagGroup);
            }
        };

        function _getHashtagGroup () {
            if($stateParams.id) {
                return hashtagGroupsService.getGroup($stateParams.id);
            } else {
                return {name: '', hashtags: ''};
            }
        }
    }]);

}());
