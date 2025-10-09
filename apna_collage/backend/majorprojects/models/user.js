const mongoose = require('mongoose');
const passportLocalMangoose = require('passport-local-mongoose')

// defining user schema.

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    }

})


// plugin - passport 

userSchema.plugin(passportLocalMangoose)

module.exports = mongoose.model('user', userSchema)