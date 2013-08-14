var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
	$routeProvider.
	when('/', {
		controller: MainController
	});
});

function MainController($http) {

	$http.get('http://localhost:3000/api/messageservice').success(function(data, status, headers, config) {
		console.log(data);
	}).error(function(data, status, headers, config) {
		console.log("Error");
	});
}