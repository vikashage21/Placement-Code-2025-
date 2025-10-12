const listing = require('./models/listing');
const review = require('./models/reviews');

module.exports.islogedIn = (req, res, next) => {


    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;

        req.flash('error', 'you must be logged in to create listing')
        return res.redirect('/login')
    }
    next()
}

module.exports.saveRedirectUrl = (req, res, next) => {

    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next()
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;

    const Listings = await listing.findById(id)

    console.log(Listings)

    if ( !Listings.owner._id.equals(res.locals.currentUser._id)) {

        req.flash('error', 'you don not have permission to edit ')

        return res.redirect(`/listing/${id}`)

    }

    next()

}


module.exports.isReviewAuthor = async (req, res, next) => {
    const {id, reviewId } = req.params;

    const reviews = await review.findById(reviewId)
    console.log(reviews)

    if (!reviews.author._id.equals(res.locals.currentUser._id)) {

        req.flash('error', 'you don not have permission to edit ')

        return redirect(`/listing/${id}`)

    }

    next()

}

