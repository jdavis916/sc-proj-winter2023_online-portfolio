import express from 'express';
import stubs from "../backend/stubs/stubs.js";
import passport from '../passport/passport.config.js';
import { CreateContact } from '../backend/controllers/createContact.js';
const router = express.Router();
/* GET home page */
router.get('/', function(req, res, next) {
	console.log(req.session);
  	res.render('index', { 
		title: 'Simple Node Template',
		msg: 'This sample template should help get you on your way.',
		pageMainClass: 'pgHome',
		jobs: stubs.jobs,
		education: stubs.education,
		interests: stubs.interests,
		user: /*stubs.user*/ req.session.passport,
		fakeUser: stubs.user
  });
})
.get('/contact', function(req, res) {
	if(req.session.contactCount)req.session.contactCount++;
	let renderObj = {
		title: 'Contact',
		msg: 'This sample template should help get you on your way.',
		pageMainClass:	'pgContact',
		user: req.session.passport,
		contact: req.session.contact
	};
	if(req.session.contactCount > 1)renderObj.contactCount = req.session.contactCount;
	res.render('contact', renderObj);
})
.get('/signin', function(req, res) {
	console.log(req.session);
	res.render('login', {
	title: 'Login',
	msg: 'This sample template should help get you on your way.',
	pageMainClass:	"pgLogin",
	user: req.session.passport,
	education: stubs.education,
	interests: stubs.interests
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
	interests: stubs.interests,
	});
})
.post('/send-contact', function(req, res) {
	try{
		CreateContact(req,res);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;
