const express = require('express');
const app = express();

app.use('/', function(req, res, next){
	console.log(req.method + " " + req.originalUrl);
	next();
});

app.get('/news', function(req, res, next){
	res.send("Here is the news!!!");
});

var server = app.listen("3000", function(){
	console.log("listening");
});