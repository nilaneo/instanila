(function() {
    'use strict';

    var module = angular.module('instanila.components.registration', [
        'ui.router'
    ]);

    module.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('registration', {
                templateUrl: 'js/components/registration/registration.html',
                controller: 'RegistrationController as vm'
            });
    }]);

    module.controller('RegistrationController', ['$state', function($state) {
        var vm = this;

        vm.userEmail = null;
        vm.userPassword = null;
        vm.onRegistrationFormSubmit = onRegistrationFormSubmit;



        //////////

        function onRegistrationFormSubmit() {
            if(vm.registrationForm.$valid) {
                _createUser(vm.userEmail, vm.userPassword);
            } else {
                window.alert('Email and password are required');
            }
        }

        function _createUser (email, password) {
            var ref = new Firebase("https://instanila.firebaseio.com");
            ref.createUser({
              email: email,
              password: password
            }, function(error, userData) {
              if (error) {
                window.alert("Error creating user:", error);
              } else {
                $state.go('hashtag-groups');
              }
            });
        }

    }]);
}());
