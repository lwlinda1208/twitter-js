const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const tweetBank = require('./tweetBank');
const routes = require('./routes');
var bodyParser = require('body-parser');
const morgan = require('morgan');

app.set('view engine', 'html');	//extension of the template
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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
