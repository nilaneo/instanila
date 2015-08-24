(function() {
    'use strict';

    var module = angular.module('instanila', [
        'ionic',
        'instanila.components.hashtagGroupsList',
        'instanila.components.hashtagGroupsManage'
    ]);

    module.run(['$state', function($state) {
        $state.go('hashtag-groups');
    }]);

    module.run(['$ionicPlatform', function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }]);
})();
