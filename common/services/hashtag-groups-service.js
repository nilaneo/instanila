(function() {
    'use strict';

    var module = angular.module('instanila.common.hashtagGroupsService', [
        'instanila.common.collectionsStorageService'
    ]);

    module.factory('hashtagGroupsService', ['collectionsStorageService', function(collectionsStorageService){

        var hashtagGroups = collectionsStorageService.getCollection('hashtagGroups');

        var service = {
            getGroup: getGroup,
            getAllGroups: getAllGroups,
            saveGroup: saveGroup,
            deleteGroup: deleteGroup
        };

        return service;

        //////////

        function getGroup(id) {
            return angular.copy(_.findWhere(hashtagGroups, {id: id}));
        }

        function getAllGroups() {
            return hashtagGroups;
        }

        function saveGroup(hashtagGroup) {
            if(hashtagGroup.id) {
                _updateGroup(hashtagGroup);
            } else {
                _createGroup(hashtagGroup);
            }
        }

        function deleteGroup(hashtagGroup) {
            var index = _.findIndex(hashtagGroups, function(currentHashtagGroup) {
                return hashtagGroup.id === currentHashtagGroup.id;
            });

            if(index !== -1) {
                hashtagGroups.splice(index, 1);
            }
        }

        function _createGroup(hashtagGroup) {
            var hashtagGroupWithMaxId = _.max(hashtagGroups, function (currentHashtagGroup) {
                return parseInt(currentHashtagGroup.id, 10);
            });
            hashtagGroup.id = (parseInt(hashtagGroupWithMaxId.id, 10) + 1).toString();
            hashtagGroups.push(hashtagGroup);
        }

        function _updateGroup(hashtagGroup) {
            var originalHashtagGroup = _.findWhere(hashtagGroups, {id: hashtagGroup.id});
            originalHashtagGroup.name = hashtagGroup.name;
            originalHashtagGroup.hashtags = hashtagGroup.hashtags;
        }

    }]);
})();
