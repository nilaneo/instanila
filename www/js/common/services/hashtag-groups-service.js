(function() {
    'use strict';

    var module = angular.module('instanila.common.hashtagGroupsService', [
            'firebase'
        ]);

    module.factory('hashtagGroupsService', ['$firebaseArray', '$firebaseAuth', function($firebaseArray, $firebaseAuth){
        var hashtagGroups;

        var service = {
            getGroup: getGroup,
            getAllGroups: getAllGroups,
            saveGroup: saveGroup,
            deleteGroup: deleteGroup
        };

        activate();

        return service;

        //////////

        function activate () {
            var ref = new Firebase("https://instanila.firebaseio.com");
            var authObj = $firebaseAuth(ref);

            initHashtagGroupsArray(authObj.$getAuth().uid);

            authObj.$onAuth(function(authData){
                if(authData) {
                    initHashtagGroupsArray(authData.uid);
                } else if (hashtagGroups){
                    hashtagGroups.$destroy();
                    hashtagGroups = null;
                }
            });
        }

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

        function initHashtagGroupsArray(uid) {
            var hashtagGroupsRef = new Firebase('https://instanila.firebaseio.com/hashtagGroups/' + uid);
            hashtagGroups = $firebaseArray(hashtagGroupsRef);
        }

    }]);
})();
