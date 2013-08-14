var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'index.html',
		controller: MainController controller. js ("Specification version"-- v)
	});
});

function MainController($http) {

	$http.get('localhost:3000/api/messageservice').success(function(data) {
		$scope.idea = data;
		console.log($scope.users);
	});
}