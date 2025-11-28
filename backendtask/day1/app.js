import express, { urlencoded } from 'express'
import { configDotenv } from 'dotenv'
import router from './router/router.js'
import { connect } from './db/conn.js'
import { loggerMiddleware } from './middlewares/loggedMiddleware.js'
// config dotenv

configDotenv({
    path: "./.env"
})

// creating express app
const app = express()

// middlewares

app.use(express.json())
app.use(urlencoded({
    extended: true
}))

// define the router 

app.use('/api', router)
// middleware defined to log the request
app.use(loggerMiddleware)

// listing the app server

connect(app.listen(process.env.PORT, () => {
    console.log(`server is listing on port ${process.env.PORT}`)
}))
