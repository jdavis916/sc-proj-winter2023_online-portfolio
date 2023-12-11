import express from 'express';
import passport from '../passport/passport.config.js';
import { CreateUser } from '../backend/controllers/createUser.js';
const router = express.Router();

/*router.get('/get-user', function(req,res){
    res.send('user route hit');
})*/
router.post('/login', passport.authenticate('local', {successRedirect: '/profile', failureRedirect: '/signin', failureMessage: true}), function(req,res){
    console.log(req.body);
})
.post('/signup', function(req,res) {
    try{
        CreateUser(req,res);
    }catch(err){
        console.log(err)
    }
})
.post('/logout', function(req,res){
    if(req.session){
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    }else{
        res.redirect('/');
    }
});
module.exports = router;