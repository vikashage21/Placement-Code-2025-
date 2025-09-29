const mongoose = require('mongoose')
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


    }
})

const Listing = mongoose.model("Listing", listing)

module.exports = Listing;