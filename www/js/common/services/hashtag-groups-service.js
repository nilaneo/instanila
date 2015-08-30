(function() {
    'use strict';

    var module = angular.module('instanila.common.hashtagGroupsService', [
            'firebase'
        ]);

    module.factory('hashtagGroupsService', ['$firebaseArray', function($firebaseArray){
        var hashtagGroupsRef = new Firebase("https://instanila.firebaseio.com/hashtagGroups");
        var hashtagGroups = $firebaseArray(hashtagGroupsRef);

        var service = {
            getGroup: getGroup,
            getAllGroups: getAllGroups,
            saveGroup: saveGroup,
            deleteGroup: deleteGroup
        };

        return service;

        //////////

        function getGroup(id) {
            return hashtagGroups.$getRecord(id);
        }

        function getAllGroups() {
            return hashtagGroups;
        }

        function saveGroup(hashtagGroup) {
            if(hashtagGroup.$id) {
                hashtagGroups.$save(hashtagGroup);
            } else {
                hashtagGroups.$add(hashtagGroup);
            }
        }

        function deleteGroup(hashtagGroup) {
            hashtagGroups.$remove(hashtagGroup);
        }

    }]);
})();
