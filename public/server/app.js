var express = require('express');
var app = express();
var http = require('http').createServer(app);



http.listen(3000, function(){
	console.log('LOGS : Start Server localhost:%d', 3000);
})


app.get('/', function (req, res, next) {
	res.send("Hello, nodejs World!");	
	next();
})
