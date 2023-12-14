import crypto from 'crypto';
import passport from 'passport';
const prisma = require('../db/db');

export const CreateUser = async (req, res) => {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async (err, hashedPw)=>{
        if(err)console.log(err);
        await prisma.users.create({
            data: {
                email: req.body.email,
                password: hashedPw.toString('hex'),
                salt: salt.toString('hex'),
                fname: req.body.fname,
                lname: req.body.lname,
                location: req.body.location,
                occupation: '',
                bio: req.body.bio,
                photo: ''
            }
        });
        req.login(req.body, function(err){
            if(err) console.log(err);
            res.redirect('/profile');
        })
    })
}