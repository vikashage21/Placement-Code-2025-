//  creating review model for user to review .

const mongoose = require('mongoose');
const { type } = require('../utils/joiSchema');

const reviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    }, comment: String,

    createAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})


const review = new mongoose.model('review', reviewSchema);

module.exports = review