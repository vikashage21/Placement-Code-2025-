require('dotenv').config();

const express = require('express')
const router = express.Router()
const multer = require('multer');
const { storage } = require('../cloudinary/index.js');
const upload = multer({ storage });




const wrapAsync = require('../utils/wrapAsync')
const listing = require('../models/listing')
const errorHandler = require('../utils/errorHandler.js')


const schemaValidator = require('../utils/joiSchema.js')

const { islogedIn, isOwner } = require('../middleware.js')

const listingControllers = require('../controllers/listing.js')


// middleware for validation of schema

const validateListing = (req, res, next) => {
    const { error } = schemaValidator.validate(req.body)
    if (error) {
        throw (new errorHandler(400, error))
    } else {
        next()
    }
}


router.get('/', wrapAsync(listingControllers.index))
// route for adding new post

router.get('/new', islogedIn, wrapAsync(listingControllers.newPost))



// route for showing individual listing

router.get('/:id', wrapAsync(listingControllers.post))

// post request for new post

router.post('/', islogedIn, upload.single('image'), validateListing, wrapAsync(listingControllers.uploadPost))

// route for update post

router.get('/:id/edit', wrapAsync(listingControllers.updatePost))

// route put request

router.put('/:id/edit', islogedIn,  upload.single('image'), isOwner, wrapAsync(listingControllers.editPost))

router.delete('/:id/edit', islogedIn, wrapAsync(listingControllers.destroyPost))


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