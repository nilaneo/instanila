(function() {
	'use strict';

	var instanilaModule = angular.module('instanila', [
			'ngRoute'
		]);

	instanilaModule.config(['$routeProvider', function($routeProvider) {
		$routeProvider
	     	.when('/hashtag-groups', {
	        	templateUrl: 'hashtag-groups.html',
	        	controller: 'ListHashtagGroupsController'
	    	})
	    	.when('/hashtag-groups/new', {
	        	templateUrl: 'hashtag-groups-new.html',
		        controller: 'AddHashtagGroupController'
	     	})
	     	.otherwise({
	        	redirectTo: '/hashtag-groups'
	      	});
	}]);

	instanilaModule.factory('hashtagGroupsService', [function(){
		 var hashtagGroups = [
			{name: 'food', hashtags: '#food #instafood #vscofood #tastyfood #eco #organic #exclusive'},
			{name: 'vsco', hashtags: '#vsco #vscocam #vscoism #vscobest #vscoart #vscodaily'},
			{name: 'travel', hashtags: '#travel #vscotravel #instatravel #doyoutravel #traveltheworld #travelmore'}
		];
		return {
			getAll: function() {
				return hashtagGroups;
			},
			addNew: function(hashtagGroup) {
				hashtagGroups.push(hashtagGroup);
			},
			deleteGroup: function(hashtagGroup) {
				var index = hashtagGroups.indexOf(hashtagGroup);
				if(index !== -1) {
					hashtagGroups.splice(index, 1);
				}
			}
		};
	}]);

	instanilaModule.controller('ListHashtagGroupsController', ['$scope', 'hashtagGroupsService', function($scope, hashtagGroupsService) {	
	 	$scope.hashtagGroups = hashtagGroupsService.getAll();
	 	$scope.deleteHashtagGroup = function(hashtagGroup) {
	 		if (window.confirm('Do you really want to delete this hashtag group?')) {
	 			hashtagGroupsService.deleteGroup(hashtagGroup);
	 		}
	 	};
	}]);

	instanilaModule.controller('AddHashtagGroupController', ['$scope', '$location', 'hashtagGroupsService', function($scope, $location, hashtagGroupsService) {
		$scope.newHashtagGroup = {name: '', hashtags: ''};

	 	$scope.addHashtagGroup = function() {
	 		if($scope.addHashtagGroupForm.$valid) {
		 		hashtagGroupsService.addNew($scope.newHashtagGroup);
		 		$location.path('/hashtag-groups');
	 		} else {
	 			window.alert('Name and Hashtags are required fields');
	 		}
	 	};
	}]);
})();
