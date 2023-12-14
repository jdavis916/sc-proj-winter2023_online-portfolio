const prisma = require('../db/db');

export const CreateContact = async (req, res) => {
    if(!req.session.contact){
        await prisma.contacts.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            }
        });
        req.session.contact = true;
        req.session.contactCount = 1;
    }
    res.redirect('/contact');
}