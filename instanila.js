(function() {
	'use strict';

	var instanilaModule = angular.module('instanila', []);

	instanilaModule.controller('HashtagGroupsController', function($scope) {
		var hashtagGroups = [
			{name: 'food', hashtags: '#food #instafood #vscofood #tastyfood #eco #organic #exclusive'},
			{name: 'vsco', hashtags: '#vsco #vscocam #vscoism #vscobest #vscoart #vscodaily'},
			{name: 'travel', hashtags: '#travel #vscotravel #instatravel #doyoutravel #traveltheworld #travelmore'}
		];	
	 	$scope.hashtagGroups = hashtagGroups;
	});
})();
