import { Router } from 'express'
import userController from '../controllers/User.js'
const userRoutes = Router()

userRoutes.post('/register', userController.createUser)
userRoutes.post('/login', userController.login)
userRoutes.post('/update', userController.updateUserInfo)
userRoutes.post('/delete', userController.deleteUser)

export default userRoutes
