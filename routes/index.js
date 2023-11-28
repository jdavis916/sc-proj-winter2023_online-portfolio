var express = require('express');
var router = express.Router();
import * as stubs from '../backend/stubs/stubs.js';

/* GET home page */
router.get('/', function(req, res, next) {
	console.log(stubs);
	res.render('index', { 
  	title: 'Simple Node Template',
  	msg: 'This sample template should help get you on your way.',
  	pageMainClass: 'pgHome'
  });
})
.get('/contact', function(req, res) {
	res.render('contact', {
	title: 'Contact',
	msg: 'This sample template should help get you on your way.',
	pageMainClass:	'pgContact'
	});
})
.get('/login', function(req, res) {
	res.render('login', {
	title: 'Login',
	msg: 'This sample template should help get you on your way.',
	pageMainClass:	"pgLogin"
	});
})
.get('/profile', function(req, res) {
	res.render('profile', {
	title: "Profile",
	msg: 'This sample template should help get you on your way.',
	pageMainClass:	"pgProfile"
	});
})
.get('/send-contact', function(req, res) {});

module.exports = router;
