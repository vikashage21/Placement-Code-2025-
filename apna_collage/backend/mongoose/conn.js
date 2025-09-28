const mongoose = require('mongoose')

main().then((res) => {
    console.log('connection successful')
}).catch((err) => {
    console.log(err)
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
}

// defining schema for user 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// defining model 
// always use first letter is capital

const User = mongoose.model('User', userSchema)

const user1 = new User({
    name: "vikash",
    email: "vk220783@gmai.com",
    age: 45
})

// user1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// User.insertMany([
//     {
//         name: "mohan",
//         email: "mohan@gmail.com",
//         age: 55
//     },
//     {
//         name: "vishal",
//         email: "vishalgupta@gmail.com",
//         age: 55
//     },
//     {
//         name: "bittu",
//         email: "bittu@gmail.com",
//         age: 55
//     }
// ]).then((data) => {
//     console.log('saved data in database', data)
// }).catch((err) => {
//     console.log(err)
// })


// find from database

// User.find({
//     age :{$gt : 53}
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// single unit of data returns

// User.findOne({
//     age :{$gt : 53}
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// updating the collections data


User.updateOne({ name: "mohan" }, { age: 66 }).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})