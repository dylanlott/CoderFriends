var app = angular.modul('CoderFriends', []); 

app.config(function($routeProvider, $httpProvider, $routeParams) {
	$httpProvider.interceptors.push('httpRequestInterceptor'); 

	$routeProvider 
	.when('/', { //login with github page and button
		templateUrl: 'index.html'
		controller: 'indexCtrl'
	}); 

	.when('/friend', {
		templateUrl: 'friend.html',
		controller: 'friendCtrl'
	}); 

	.when('/friend/:github_username', {
		templateUrl: 'friend.html',
		controller: 'friendCtrl'
	}); 
});
