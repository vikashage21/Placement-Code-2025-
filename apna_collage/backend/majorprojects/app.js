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


// setting ejs engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

// setting router here

app.use('/listing', listing)
app.use('/listing', review)

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







// defining express session

const sessionOption = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}

app.use(session(sessionOption))

// routes for get session

app.get('/register' , (req,res)=>{
    let {name='anonyms'} = req.query;
    req.session.name=name
    console.log(req.session.name)
    res.send(name)
})

app.get('/hello' , (req,res)=>{
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