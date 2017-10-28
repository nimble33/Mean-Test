var express = require('express');
var app = express(); 
var port = process.env.PORT || 9000;
var morgan = require('morgan');
var mongoose = require('mongoose')

app.use(morgan('dev'));

mongoose.connect('localhost:27017/test', function(err){
	if(err){
		console.log('Not connected')
	}else{
		console.log('connected')
	}
});

app.get('/home', function(req, res){
	res.send('Hello from home');
})

app.listen(port, function(){
	console.log('running made change ' + port);
});