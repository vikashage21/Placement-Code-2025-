const express = require('express')
const router = express.Router()

const wrapAsync = require('../utils/wrapAsync')
const listing = require('../models/listing')
const errorHandler = require('../utils/errorHandler.js')


const schemaValidator = require('../utils/joiSchema.js')

const { islogedIn } = require('../middleware.js')


// middleware for validation of schema

const validateListing = (req, res, next) => {
    const { error } = schemaValidator.validate(req.body)
    if (error) {
        throw (new errorHandler(400, error))
    } else {
        next()
    }
}


router.get('/', wrapAsync(async (req, res) => {
    const allListing = await listing.find({});
    res.render('listing/index.ejs', { allListing })

}))
// route for adding new post

router.get('/new', islogedIn, wrapAsync(async (req, res) => {

    res.render('listing/new.ejs')
}))



// route for showing individual listing

router.get('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id).populate('reviews');
    console.log(list === null)
    if (!list) {
        req.flash('error', 'Listing you requested for does not exist')
        return res.redirect('/listing')
    }
    res.render('listing/listing.ejs', { list })

}))

// post request for new post

router.post('/', islogedIn, validateListing, wrapAsync(async (req, res, next) => {


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
    req.flash('success', 'New listing created')
    res.redirect('/listing')




}))

// route for update post

router.get('/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id)


    res.render('listing/edit.ejs', { list })
}))

// route put request

router.put('/:id/edit', islogedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id)
    console.log(req.body)
    const updatedList = await listing.findByIdAndUpdate(id, { ...req.body })

    console.log(updatedList)
    req.flash('success', 'New listing edited')

    res.redirect(`/listing/${id}`
    )


}))

router.delete('/:id/edit', islogedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedList = await listing.findByIdAndDelete(id)
    console.log(deletedList)
    req.flash('success', 'listing deleted successfully')

    res.redirect('/listing')
}))


// router.get('/testListing', async(req, res)=>{
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




module.exports = router;