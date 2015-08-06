(function() {
    'use strict';

    var module = angular.module('instanila.common.collectionsStorageService', []);

    module.factory('collectionsStorageService', ['$rootScope', function($rootScope){

        var service = {
            getCollection: getCollection
        };

        return service;

        //////////

        function getCollection (collectionName) {
            var collection = JSON.parse(localStorage.getItem(collectionName)) || [];

            $rootScope.$watch(function(){
                return collection;
            }, function () {
                localStorage.setItem(collectionName, angular.toJson(collection));
            }, true);

            return collection;
        }
    }]);
})();
