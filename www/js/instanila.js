(function() {
    'use strict';

    var module = angular.module('instanila', [
        'ionic',
        'instanila.common.directives.logout-button',
        'instanila.components.login',
        'instanila.components.registration',
        'instanila.components.hashtagGroupsList',
        'instanila.components.hashtagGroupsManage'
    ]);

    module.run(['$state', '$firebaseAuth', function($state, $firebaseAuth) {
        var ref = new Firebase("https://instanila.firebaseio.com");
        var authObj = $firebaseAuth(ref);

        if (!!authObj.$getAuth()) {
            $state.go('hashtag-groups');
        } else {
            $state.go('login');
        }

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
