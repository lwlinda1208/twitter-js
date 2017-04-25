const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
var urlencodedParser = bodyParser.urlencoded({extended: false});


router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req, res, next) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets } );
});

router.get('/tweets/:id', function(req, res, next){
	var id = parseInt(req.params.id);
	var tweets = tweetBank.find( {id: id} );
	res.render( 'index', { tweets: tweets } );
})

router.post('/tweets', urlencodedParser, function(req, res, next){
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
})

router.use(express.static('public'));

module.exports = router;