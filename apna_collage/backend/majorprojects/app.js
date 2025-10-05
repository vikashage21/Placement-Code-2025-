const express = require('express');
const app = express()
const port = 8080;
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const listing = require('./models/listing.js')
const path = require('path')
const engine = require('ejs-mate')
const wrapAsync = require('./utils/wrapAsync.js')
const errorHandler = require('./utils/errorHandler.js')
const schemaValidator = require('./utils/joiSchema.js')
const { reviewSchema } = require('./utils/joiSchema.js')

const review = require('./models/reviews')

// setting ejs engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

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

// middleware for validation of schema

const validateListing = (req, res, next) => {
    const { error } = schemaValidator.validate(req.body)
    if (error) {
        throw (new errorHandler(400, error))
    } else {
        next()
    }
}


//  middleware for validation of reviews

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    console.log(error)
    if (error) {
        throw (new errorHandler(400, error))
    } else {
        next()
    }
}
// listing route .

app.get('/listing', wrapAsync(async (req, res) => {
    const allListing = await listing.find({});
    res.render('listing/index.ejs', { allListing })

}))
// route for adding new post

app.get('/listing/new', wrapAsync(async (req, res) => {
    res.render('listing/new.ejs')
}))



// route for showing individual listing

app.get('/listing/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id).populate('reviews');
    res.render('listing/listing.ejs', { list })

}))

// post request for new post

app.post('/listing', validateListing, wrapAsync(async (req, res, next) => {


    const { title, description, image, price, location, country } = req.body;


    const allListing = new listing({
        title,
        description,
        image,
        price,
        location,
        country

    })
    console.log(allListing)

    await allListing.save()
    res.redirect('/listing')




}))

// route for update post

app.get('/listing/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id)
    res.render('listing/edit.ejs', { list })
}))

// route put request

app.put('/listing/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id)
    console.log(req.body)
    const updatedList = await listing.findByIdAndUpdate(id, { ...req.body })

    console.log(updatedList)
    res.redirect(`/listing/${id}`
    )


}))

app.delete('/listing/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedList = await listing.findByIdAndDelete(id)
    console.log(deletedList)
    res.redirect('/listing')
}))


// app.get('/testListing', async(req, res)=>{
//     const sampleListing = new listing({
//         title:"my new villa",
//         description:"by the beach",
//         price:"1220",
//         location:"new york",
//         country:"america"
//     })

//     await sampleListing.save()
//     res.send('sample saved in database')

// })


// routes for posting reviews

app.post('/listing/:id/review', validateReview, wrapAsync(async (req, res) => {
    let Listing = await listing.findById(req.params.id);
    let newReview = new review(req.body.review);
    console.log(Listing)

    Listing.reviews.push(newReview)
    await newReview.save()
    await Listing.save();
    res.redirect(`/listing/${req.params.id}`)

}))

//  route to delete reviews 

app.delete('/listing/:id/review/:reviewId', wrapAsync(async (req, res) => {

    const { id } = req.params;
    
    const reviewId = req.params.reviewId;
    await listing.findByIdAndUpdate(id, { $pull: { review: reviewId } })
    await review.findByIdAndDelete(reviewId)
    res.redirect(`/listing/${id}`)

}))

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