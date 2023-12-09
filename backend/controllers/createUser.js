import passport from 'passport';
import crypto from 'crypto';
const prisma = require('../db/db');

export const CreateUser = async (req, res) => {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async (err, hashedPw)=>{
        if(err)return(err);
        console.log(hashedPw, hashedPw.toString());
        await prisma.users.create({
            data: {
                email: req.body.email,
                password: hashedPw.toString('hex'),
                salt: salt.toString('hex'),
                fname: req.body.fname,
                lname: req.body.lname,
                location: req.body.location,
                occupation: req.body.occupation,
                bio: req.body.bio,
                photo: req.body.photo
            }
        });
    })
    //console.log(prisma.user);
    /*const user = */
    try{
        res.send(user);
    }catch(err){
        res.send(err);
    }
}