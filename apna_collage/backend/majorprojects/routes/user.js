const express = require('express');
const router = express.Router()
const User = require('../models/user');
const user = require('../models/user');
const wraAsync = require('../utils/wrapAsync')

router.get('/signup', (req, res) => {
    res.render('../views/user/user.ejs')
})


router.post('/signup', wraAsync(  async (req, res) => {
    try {
        let { username, email, password } = req.body;

        // creating a object

        let newUser = new user({
            email,
            username

        })

        // saving data into database

        let registerUser = await user.register(newUser, password)

        console.log(registerUser)

        req.flash('success', 'welcome to Wonderlust')
        res.redirect('/listing')

    } catch (error) {
        req.flash('error', error.message)
        res.redirect('/signup')

    }

}))

// creating 


module.exports = router