import express from 'express'
import mongoose from 'mongoose'
import userRouter from './router/user.js'
import taskRouter from './router/task.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './middlewares/error.js'
import cors from 'cors'

export const app = express()
const router = express.Router()

config({
  path: './data/config.env',
})

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
  })
)

// routers
app.use('/api/v1/users', userRouter)
app.use('/api/v1/task', taskRouter)

app.get('/', (req, res) => {
  res.send('Working nice')
})
app.use(errorMiddleware)
