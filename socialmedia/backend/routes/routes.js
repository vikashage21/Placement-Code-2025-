import express from 'express';
import {
  loginUser,
  registerUser,
  getUser,
  getUsers,
  editUser,
  followUnfollowUser,
  changeUserAvatar
} from '../controller/userController.js';

const router = express.Router();  // ✅ Correct way

// Define your routes
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', editUser);
router.put('/user/:id/follow', followUnfollowUser);
router.put('/user/:id/avatar', changeUserAvatar)

export default router; // ✅ Use this with import





