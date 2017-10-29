var User = require('../models/user');

module.exports = function(router) {

	//Registration
	router.post('/users', function(req, res){
	 	var user = new User();
	 	user.username = req.body.username;
	 	user.password = req.body.password;
	 	user.email = req.body.email;
	 	if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == ''){
	 		//res.send('Ensure username, email and password')
	 		res.json({success: false, message:'Ensure username, email and password'});
	 	}
	 	else{
	 		user.save(function(err){
	 		if(err){
	 			res.json({success: false, message:'Name/Email already exists'});
	 		}
	 		else{
	 			res.json({success: true, message:'success'});
	 		}
	 	});
	 	}		
	});


	//LOGIN
	router.post('/authenticate', function(req, res){
		User.findOne({username: req.body.username}).select('email username password')
		.exec(function(err,user){
			if(err) throw err;
			if(!user) {
				res.json({success: false, message: 'Could not auth user'})
			}
			else if(user){
				if(req.body.password){
					var validPassword = user.comparePassword(req.body.password);					
				}
				else{
					res.json({success:false, message:'no pass provided'})
				}
				if(!validPassword){
					res.json({success:false, message:'could not validate password'});
				}
				else{
				res.json({success:true, message:'User authenticated'});
				}
			}			
		});
	});


	return router;
}