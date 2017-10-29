//console.log("from routes.js")
angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
	//console.log('test routes')
	
	$routeProvider

	.when('/',{
		templateUrl: 'app/views/pages/home.html'
	})

	.when('/register',{
		templateUrl: 'app/views/pages/users/register.html',
		controller:'regCtrl',
		controllerAs:'register' //being used to identify in html
	})
	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode({
		enabled:true,
		requireBase: false
	});
});