const express = require('express');
const router = express.Router()
const User = require('../models/user');
const user = require('../models/user');
const wraAsync = require('../utils/wrapAsync')
const passport = require('passport');
const {saveRedirectUrl} = require('../middleware')

router.get('/signup', (req, res) => {
    res.render('../views/user/user.ejs')
})


router.post('/signup', wraAsync(async (req, res) => {
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

        req.login(registerUser, (err) => {
            if (err) {
                return next(err)
            }
            req.flash('success', 'welcome to WornderLust')
            res.redirect('/listing')
        })



    } catch (error) {
        req.flash('error', error.message)
        res.redirect('/signup')

    }

}))

// creating a login request

router.get('/login', (req, res) => {
    res.render('../views/user/login.ejs')
})

// post request for login

router.post('/login', saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), async (req, res) => {

    req.flash('success', 'welcome to WonderLust')
    // Use res.locals.redirectUrl with fallback to homepage
    const redirectUrl = res.locals.redirectUrl || '/listing' ;


    console.log(redirectUrl)

   
    // Clear it from session after redirect
    delete req.session.redirectUrl;

    res.redirect(redirectUrl);
})

router.get('/logout', (req, res) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        }

        req.flash('success', 'you are logged out!')
        res.redirect('/listing')
    })
})


module.exports = router