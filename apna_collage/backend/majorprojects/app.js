const express = require('express');
const app = express()
const port = 8080;
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require('path')
const engine = require('ejs-mate')

const errorHandler = require('./utils/errorHandler.js')

const listing = require('./routes/listing.js');
const review = require('./routes/review.js')
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local')
const user = require('./models/user.js')
const userRouter = require('./routes/user.js')


// setting ejs engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))



// defining express session

const sessionOption = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // secure: true

        //  setting the time to expire seven days, twenty four hours , sixty minutes , sixty seconds , 1000 millisecond (one week)
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true

    }
}

app.use(session(sessionOption))
app.use(flash())

// middlewares for authorization

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())


// defining locals here - can access anywhere - global
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;

    next()
})







// setting router here

app.use('/listing', listing)
app.use('/listing', review)
app.use('/' , userRouter)


// creating a fake user

app.get('/demouser', async (req, res) => {

    let fakeUser = user({
        email: 'vk220783@gmail.com',
        username: "coderalpha"
    })
    let registerUser = await user.register(fakeUser, 'helloworld');
    res.send(registerUser)

})

// defining variables

let MONGODB_URL = "mongodb://127.0.0.1:27017/worderlust";

// connecting to database;
main().then(() => {
    console.log('connected to database ')
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGODB_URL)
}

// route for root




app.get('/', (req, res) => {
    res.send('working root')
})










// routes for get session

app.get('/register', (req, res) => {
    let { name = 'anonyms' } = req.query;
    req.session.name = name
    console.log(req.session.name)
    res.send(name)
})

app.get('/hello', (req, res) => {
    res.send(`hello ${req.session.name}`)
    console.log(res.session)
})

// define for all request 

app.all(/.*/, (req, res, next) => {
    next(new errorHandler(404, 'Page not found'));
});


// defining error middlewares

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).render('listing/error.ejs', { message })
})


// server listing 
app.listen(port, () => {
    console.log(`server is listing on ${port}`)
})