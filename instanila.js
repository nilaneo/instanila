(function() {
	'use strict';

	var instanilaModule = angular.module('instanila', []);

	instanilaModule.controller('HashtagGroupsController', function($scope) {	
	 	$scope.hashtagGroups = [
			{name: 'food', hashtags: '#food #instafood #vscofood #tastyfood #eco #organic #exclusive'},
			{name: 'vsco', hashtags: '#vsco #vscocam #vscoism #vscobest #vscoart #vscodaily'},
			{name: 'travel', hashtags: '#travel #vscotravel #instatravel #doyoutravel #traveltheworld #travelmore'}
		];

	 	$scope.newHashtagGroup = {name: '', hashtags: ''};

	 	$scope.addHashtagGroup = function() {
	 		if($scope.addHashtagGroupForm.$valid) {
		 		$scope.hashtagGroups.push($scope.newHashtagGroup);
		 		$scope.newHashtagGroup = {name: '', hashtags: ''};
	 		} else {
	 			window.alert('Name and Hashtags are required fields');
	 		}
	 	};
	});
})();
