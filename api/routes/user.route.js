import express from 'express';
import { test, updateUser, deleteUser, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser); 
router.delete('/delete/:id', verifyToken, deleteUser);
router.get(':id', verifyToken, getUser);


//create token inside the cookie to authenticate the user


export default router;