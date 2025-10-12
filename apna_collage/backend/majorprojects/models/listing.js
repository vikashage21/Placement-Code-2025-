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
        url: {
            type: String,
            default: "https://res.cloudinary.com/demo/image/upload/v1691500000/default-listing.jpg", // Use a Cloudinary or Unsplash link
        },
        filename: {
            type: String,
            default: "default-image"
        }
    }
    , price: {
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