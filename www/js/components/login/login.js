(function() {
    'use strict';

    var module = angular.module('instanila.components.login', [
        'ui.router'
    ]);

    module.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('login', {
                templateUrl: 'js/components/login/login.html',
                controller: 'LoginController as vm'
            });
    }]);

    module.controller('LoginController', ['$state', function($state) {
        var vm = this;

        vm.userEmail = null;
        vm.userPassword = null;
        vm.onLoginFormSubmit = onLoginFormSubmit;

        //////////

        function onLoginFormSubmit() {
            if(vm.loginForm.$valid) {
                _loginUser(vm.userEmail, vm.userPassword);
            } else {
                window.alert('Email and password are required');
            }
        }

        function _loginUser (email, password) {
            var ref = new Firebase('https://instanila.firebaseio.com');
            ref.authWithPassword({
                email: email,
                password: password
            }, function(error, authData) {
                if (error) {
                    window.alert('Login Failed!', error);
                } else {
                    window.alert('Your account has been created. Let\'s login!');
                    $state.go('hashtag-groups');
                }
            });
        }

    }]);
}());
