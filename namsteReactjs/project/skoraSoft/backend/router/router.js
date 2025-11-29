import express from 'express'
import { getAllUsers, userPost , adminLogin , getAllMessages  } from '../controller/controller.js'
import { adminAuth } from '../middlewares/adminAuth.js'
const router = express.Router()

// get request 
// user routes
router.post("/contact", userPost);
router.get("/users", getAllUsers);

// admin login
router.post("/admin/login", adminLogin);

// admin dashboard (protected)
router.get("/admin/messages", adminAuth, getAllMessages);



export default router;