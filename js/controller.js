var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'index.html',
		controller: MainController
	});
});

function MainController($http) {

	$http.get('http://localhost:3000/api/messageservice').success(function(data) {
		$scope.idea = data;
		console.log($scope.idea);
	});
}