var express = require('express');
var app = express(); 
var port = process.env.PORT || 9000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')) //frontend
app.use('/api',appRoutes) //Backend routes


mongoose.connect('mongodb://localhost:27017/test', function(err){
	if(err){
		console.log('Not connected')
	}else{
		console.log('connected')
	}
});

app.get('*',function(req, res){
	res.sendFile(path.join(__dirname +'/public/app/views/index.html'));
});

app.listen(port, function(){
	console.log('running at ' + port);
});