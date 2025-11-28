import express from 'express'
import { aboutController, userController, getUsersAllController, addNewUsersController, userRegister, getUserData, removeUser, updateUsersController, searchUsers } from '../controller/controller.js'
import { validate } from '../middlewares/middlewares.js'

const router = express.Router()

// define the router

router.get('/', userController)
router.get('/about', aboutController)
router.get('/users', getUsersAllController)
router.post('/add-user', addNewUsersController)

router.post('/register', validate, userRegister)
router.get('/all-users', getUserData)
router.delete('/delete-user/:id', removeUser)
router.put('/users/:id', updateUsersController)
router.get('/users/search', searchUsers)





export default router;