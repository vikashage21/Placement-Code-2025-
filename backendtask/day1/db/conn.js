import mongoose from "mongoose";

export const connect = async () => {

    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/testing').then(() => {
            console.log('connected to database')
        })

    } catch (error) {

        console.log('connection fail due some reason', error.message)

    }
}