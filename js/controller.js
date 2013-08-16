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
		console.log(data);
	});
}

function AuthController($http) {

	$http.put('http://localhost:3000/api/messageservice').success(function(data) {
		console.log("Success");
	}).error(function(err, data) {
		console.log("Failure");
	})
}