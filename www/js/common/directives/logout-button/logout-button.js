(function() {
    'use strict';

    var module = angular.module('instanila.common.directives.logout-button', []);

    module.directive('logoutButton', [function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'js/common/directives/logout-button/logout-button.html',
            controller: 'LogoutButtonController as vm'
        };
    }]);

    module.controller('LogoutButtonController', ['$state', '$firebaseAuth', function($state, $firebaseAuth) {
        var vm = this;

        vm.isUserLoggedIn = isUserLoggedIn;
        vm.logout = logout;



        var ref = new Firebase("https://instanila.firebaseio.com");
        var authObj = $firebaseAuth(ref);


        //////////

        function isUserLoggedIn () {
            return !!authObj.$getAuth();
        }

        function logout () {
            authObj.$unauth();
            $state.go('login');
        }

    }]);
}());
