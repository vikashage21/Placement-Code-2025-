import express, { urlencoded } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import upload from 'express-fileupload';
import { connectDB } from './db/conn.js';
import {notFound , errorHandler } from './middleware/errorMiddleware.js';
import router from './routes/routes.js';
// setting dotenv

dotenv.config({ path: './.env' })

// creating express app 
const app = express()




// setting cors
app.use(cors({
    origin: "http://localhost:port",
    credentials: true
}))

app.use(urlencoded({
    extended: true
}))


app.use(express.json())


app.use(upload())

// setting router 

app.use('/api', router)


// handle not found
app.use(notFound)
app.use(errorHandler)


// =========================server setup ==================
// connecting to database and listing the server

connectDB().then(app.listen(process.env.PORT, () => {
    console.log(`server is listing on ${process.env.PORT}`)
})
).catch(err => console.log(err))
