const express = require('express')

const router = express.Router({ mergeParams: true })

const review = require('../models/reviews')
const wrapAsync = require('../utils/wrapAsync')


const { reviewSchema } = require('../utils/joiSchema.js')
const listing = require('../models/listing.js')
const errorHandler = require('../utils/errorHandler.js')


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

// routes for posting reviews

router.post('/:id/review', validateReview, wrapAsync(async (req, res) => {
    let Listing = await listing.findById(req.params.id);
    let newReview = new review(req.body.review);
    console.log(Listing)

    Listing.reviews.push(newReview)
    await newReview.save()
    await Listing.save();
    res.redirect(`/listing/${req.params.id}`)

}))

//  route to delete reviews 

router.delete('/:id/review/:reviewId', wrapAsync(async (req, res) => {

    const { id } = req.params;

    const reviewId = req.params.reviewId;
    await listing.findByIdAndUpdate(id, { $pull: { review: reviewId } })
    await review.findByIdAndDelete(reviewId)
    res.redirect(`/listing/${id}`)

}))

module.exports = router