(function() {
	'use strict';

	var instanilaModule = angular.module('instanila', []);

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
			}
		};
	}]);

	instanilaModule.controller('ListHashtagGroupsController', ['$scope', 'hashtagGroupsService', function($scope, hashtagGroupsService) {	
	 	$scope.hashtagGroups = hashtagGroupsService.getAll();
	}]);

	instanilaModule.controller('AddHashtagGroupController', ['$scope', 'hashtagGroupsService', function($scope, hashtagGroupsService) {
		$scope.newHashtagGroup = {name: '', hashtags: ''};

	 	$scope.addHashtagGroup = function() {
	 		if($scope.addHashtagGroupForm.$valid) {
		 		hashtagGroupsService.addNew($scope.newHashtagGroup);
		 		$scope.newHashtagGroup = {name: '', hashtags: ''};
	 		} else {
	 			window.alert('Name and Hashtags are required fields');
	 		}
	 	};
	}]);
})();
