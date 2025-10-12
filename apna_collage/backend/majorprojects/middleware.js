const listing = require('./models/listing')

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

    const Listing = await listing.findById(id)

    if (!Listing.owner._id.equals(res.locals.currentUser._id)) {

        req.flash('error', 'you don not have permission to edit ')

        return redirect(`/listing/${id}`)

    }

    next()

}