angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $timeout, $location){
	var app  = this;
	this.doLogin = function(loginData){
		app.loading = true;
		app.errorMsg = false;
		//console.log('form submitted button')
		//console.log(this.regData)
		Auth.login(app.loginData).then(function(data){
			if(data.data.success){
				app.loading = false;
				app.successMsg = data.data.message;
				$timeout(function(){
					$location.path('/about');
				},2000);
				
			}
			else{
				app.loading = false;
				app.errorMsg = data.data.message;

			}
		});
	};
});
