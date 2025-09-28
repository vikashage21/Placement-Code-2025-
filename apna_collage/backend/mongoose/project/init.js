const mongoose = require('mongoose')
const Chat = require('./models/chatschema.js')


// calling main function

main().then(() => {
    console.log('connection successful')
}).catch((error) => {
    console.log(error)
})


// defining a mongoose connecting 

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/whatsup')

}


// adding dummy data here .


let allChat = [

    {
        from: "Vikash",
        to: "Rahul",
        msg: "Hey Rahul! How are you?",
    },
    {
        from: "Rahul",
        to: "Vikash",
        msg: "I’m good, bro! What about you?",
    },
    {
        from: "Anjali",
        to: "Vikash",
        msg: "Don’t forget about the project meeting tomorrow.",
    },
    {
        from: "Vikash",
        to: "Anjali",
        msg: "Yes, I’ll be there on time 👍",
    },
    {
        from: "Rahul",
        to: "Anjali",
        msg: "Did you complete the assignment?",
    },
    {
        from: "Anjali",
        to: "Rahul",
        msg: "Yes, I submitted it yesterday.",
    },

]


Chat.insertMany(allChat).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})