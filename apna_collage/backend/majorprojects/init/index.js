// created a file for inserting data and delete the old data from database

const mongoose = require('mongoose')
const listing = require('../models/listing')
let initData = require('../init/data');


// defining variables

let MONGODB_URL = "mongodb://127.0.0.1:27017/worderlust";

// connecting to database;
main().then(() => {
    console.log('connected to database ')
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGODB_URL)
}

async function initDB() {
    // deleting the database
    await listing.deleteMany({})




    //    inserting the data 

    // next step assigning owner in initdata.
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: '68eb9892b0ae2b43d5cf847f' // <-- must be a valid 24-char ID
    }));




    await listing.insertMany(initData.data)







    console.log('data has been save ')


}

initDB()