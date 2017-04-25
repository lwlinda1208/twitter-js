const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const tweetBank = require('./tweetBank');
const routes = require('./routes');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', function(req, res, next){
	console.log(req.method + " " + req.originalUrl);
	next();
});

app.use('/', routes);

var server = app.listen("3000", function(){
	console.log("listening");
});


// var locals = {
// 	title : 'An Example',
// 	people : [ {name: 'Allie'},
// 			{name: 'Jackie'}]
// }

// const people = [{name: 'Allie'}, {name: 'Jackie'}];

//res.render('index', {title: 'Pair Programming Budz', people: people});

// app.get('/views/index.html', function(req, res, next) {
// 	// nunjucks.configure('views', {noCache: true});
// 	// nunjucks.render('index.html', locals, function(err, output) {
// 	// 	res.send(output);
// 	// })
	
// });

// console.log(tweetBank.add('Jackie', 'I know so much about nunjucks and nothing at all!'));
// console.log(tweetBank.find({name: 'Jackie'}));
