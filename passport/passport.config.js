import passport from 'passport';
import crypto from 'crypto';
import LocalStrategy from 'passport-local';
import prisma from '../backend/db/db';

passport.use(new LocalStrategy(function verify(username, password, cb){
    console.log(`username: ${username} \n password: ${password}`);
    prisma.users.findUnique({
        where: {
            email: username
        }
    })
    .then(user => {
        console.log(`user: ${user}`); //if result, log result
        //if no result, throw error
        if(!user){
            return cb(null, false, {message: 'Incorrect email or password'});
        }
        //compare password with hashed password
        crypto.pbkdf2(password, Buffer.from(user.salt, 'hex'), 310000, 32, 'sha256', (err, hashedPw)=>{
            if(err) console.log(err);
            if(!crypto.timingSafeEqual(Buffer.from(user.password, 'hex'), hashedPw)){ //if not equal
                return cb(null, false, {message: `passwords dont match. user pass: ${Buffer.from(user.password, 'hex')} \n expected hash: ${hashedPw}`});
            }
            console.log(`passwords match. user pass: ${Buffer.from(user.password, 'hex')} \n expected hash: ${hashedPw}`);
        })
        return cb(null, user, {message: 'Logged In Successfully'});
    })
    .catch(err => cb(err));
}))

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username
      });
    });
  });
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

module.exports = passport;