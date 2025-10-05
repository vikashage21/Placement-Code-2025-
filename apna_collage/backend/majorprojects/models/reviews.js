//  creating review model for user to review .

const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
     rating: {
        type: Number,
        min: 1,
        max: 5
    }, comment: String,
  
     createAt: {
        type: Date,
        default: Date.now()
    }
})


const review = new mongoose.model('review', reviewSchema);

module.exports = review