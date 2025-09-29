// created a file for inserting data and delete the old data from database

const mongoose = require('mongoose')
const listing = require('../models/listing')
const initData = require('../init/data');


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

   await listing.insertMany(initData.data)
    
    console.log('data has been save ')


}

initDB()