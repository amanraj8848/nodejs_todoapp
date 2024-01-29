import express from 'express'
import { User } from '../models/user.js'
import {
  registerUser,
  loginUser,
  getMyProfile,
  logout,
} from '../controllers/user.js'
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router()

router.post('/new', registerUser)
router.post('/login', loginUser)
router.get('/me', isAuthenticated, getMyProfile)
router.get('/logout', logout)

export default router
