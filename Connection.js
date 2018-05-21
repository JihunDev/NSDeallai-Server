exports.con = function(){
	var Client = require('mariasql');
	var c = new Client();
	
	c.connect({
		host : '211.253.11.138',
		port : '3306',
		user : 'root',
		password : 'whdk2002',
		db :  'test2'
	});

	c.on('connect', function(){
		console.log('Client connected');
	}).on('error',function(err){
		console.log('Client error: ' + err);
	}).on('close', function(hadError){
		console.log('Client closed');
	});

	return c;
};	
