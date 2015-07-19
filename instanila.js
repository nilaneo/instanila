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
	    	.when('/hashtag-groups/:id', {
	        	templateUrl: 'hashtag-groups-edit.html',
		        controller: 'EditHashtagGroupController'
	     	})
	     	.otherwise({
	        	redirectTo: '/hashtag-groups'
	      	});
	}]);

	instanilaModule.factory('hashtagGroupsService', [function(){
		 var hashtagGroups = [
			{id: '1', name: 'food', hashtags: '#food #instafood #vscofood #tastyfood #eco #organic #exclusive'},
			{id: '2', name: 'vsco', hashtags: '#vsco #vscocam #vscoism #vscobest #vscoart #vscodaily'},
			{id: '3', name: 'travel', hashtags: '#travel #vscotravel #instatravel #doyoutravel #traveltheworld #travelmore'}
		];
		return {
			get: function (id) {
				return angular.copy(_.findWhere(hashtagGroups, {id: id}));
			},
			getAll: function() {
				return hashtagGroups;
			},
			addNew: function(hashtagGroup) {
				var hashtagGroupWithMaxId = _.max(hashtagGroups, function (currentHashtagGroup) {
					return parseInt(currentHashtagGroup.id, 10);
				});
				hashtagGroup.id = (parseInt(hashtagGroupWithMaxId.id, 10) + 1).toString();
				hashtagGroups.push(hashtagGroup);
			},
			update: function (hashtagGroup) {
				var originalHashtagGroup = _.findWhere(hashtagGroups, {id: hashtagGroup.id});
				originalHashtagGroup.name = hashtagGroup.name;
				originalHashtagGroup.hashtags = hashtagGroup.hashtags;
			},
			deleteGroup: function(hashtagGroup) {
				var index = _.findIndex(hashtagGroups, function(currentHashtagGroup) {
					return hashtagGroup.id === currentHashtagGroup.id;
				});
				console.log(index);
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

	instanilaModule.controller('EditHashtagGroupController', ['$scope', '$location', '$routeParams', 'hashtagGroupsService', function($scope, $location, $routeParams, hashtagGroupsService) {
		$scope.hashtagGroup = hashtagGroupsService.get($routeParams.id);

	 	$scope.saveHashtagGroup = function() {
	 		if($scope.editHashtagGroupForm.$valid) {
		 		hashtagGroupsService.update($scope.hashtagGroup);
		 		$location.path('/hashtag-groups');
	 		} else {
	 			window.alert('Name and Hashtags are required fields');
	 		}
	 	};
	}]);
})();
