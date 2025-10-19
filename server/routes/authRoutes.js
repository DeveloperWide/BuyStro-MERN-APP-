import express from 'express';
const router = express.Router({});
import { signup, login, getMe } from '../controllers/authController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';


router.post('/signup', signup);

router.post('/login', login);

router.get('/me', isAuthenticated, getMe);

export default router;
