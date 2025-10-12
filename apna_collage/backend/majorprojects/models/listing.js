const mongoose = require('mongoose')
const review = require('./reviews')
const user = require('./user')
const schema = mongoose.Schema

const listing = schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String,
        default: "https://unsplash.com/photos/layered-blue-mountains-under-a-pastel-sky-7c4Gxa6598I",
        set: (v) => v === " " ? "https://unsplash.com/photos/layered-blue-mountains-under-a-pastel-sky-7c4Gxa6598I" : v
    }, price: {
        type: Number
    },
    location: {
        type: String

    },
    country: {
        type: String


    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,

        ref: "review"
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

listing.post('findByIdAndDelete', async (listing) => {
    if (listing) {
        await review.deleteMany({
            _id: {
                $in: listing.reviews
            }
        })
    }
})

const Listing = mongoose.model("Listing", listing)

module.exports = Listing;