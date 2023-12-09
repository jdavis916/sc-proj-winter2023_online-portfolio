import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { CreateUser } from '../backend/controllers/createUser.js';

passport.use(new LocalStrategy(function verify(username, password, cb){
    prisma.user.findUnique({
        where: {
            email: email
        }
    })
    .then(user => {
        //if no result, throw error
        if(!user){
            return cb(null, false, {message: 'Incorrect email or password'});
        }
        //compare password with hashed password
        crypto.pbkdf2(password, Buffer.from(user.salt, 'hex'), 310000, 32, 'sha256', (err, hashedPw)=>{
            if(err) console.log(err);
            if(!crypto.timingSafeEqual(Buffer.from(user.password, 'hex'), hashedPw)){ //if not equal
                return cb(null, false, {message: 'Incorrect email or password'});
            }
        })
        return cb(null, user, {message: 'Logged In Successfully'});
    })
    .catch(err => cb(err));
}))

const router = express.Router();
router.get('/get-user', function(req,res){
    res.send('user route hit');
})
.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'}), function(req,res){
    res.send('logged in');
})
.post('/signup', function(req,res) {
    try{
        CreateUser(req,res);
    }catch(err){
        console.log(err)
    }
});
module.exports = router;