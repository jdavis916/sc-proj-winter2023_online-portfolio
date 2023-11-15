var express = require('express');
var router = express.Router();

router.get('/get-user', (req,res) => {
    res.send('user route hit');
})
.get('/get-profile', (req,res) => {

})
.post('/profile-edit', (req,res) => {

})
.get('/signin', (req,res) => {

})
.get('/logout', (req,res) => {

})
.post('/signup', (req,res) => {

});
module.exports = router;