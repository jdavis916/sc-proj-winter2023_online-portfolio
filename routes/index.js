var express = require('express');
var router = express.Router();
import stubs from "../backend/stubs/stubs.js";

/* GET home page */
router.get('/', function(req, res, next) {
  	res.render('index', { 
		title: 'Simple Node Template',
		msg: 'This sample template should help get you on your way.',
		pageMainClass: 'pgHome',
		jobs: stubs.jobs,
		user: stubs.user,
		education: stubs.education,
		interests: stubs.interests
  });
})
.get('/contact', function(req, res) {
	res.render('contact', {
	title: 'Contact',
	msg: 'This sample template should help get you on your way.',
	pageMainClass:	'pgContact'
	});
})
.get('/signin', function(req, res) {
	console.log(req.session);
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
	pageMainClass:	"pgProfile",
	jobs: stubs.jobs,
	user: stubs.user,
	education: stubs.education,
	interests: stubs.interests
	});
})
.get('/send-contact', function(req, res) {});

module.exports = router;
