import express from 'express'
import dotenv from 'dotenv'
import { conn } from '../db/conn.js'
import cors from 'cors'
import router from '../router/router.js'

const app = express()

dotenv.config()

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

// ⭐ MOST IMPORTANT — BODY PARSER FIRST
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ⭐ Routes AFTER body parsing
app.use('/api', router)

// DB Connection + Server Start
conn(
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  })
)
