import express from 'express';
const router = express.Router({});
import { signup, login, getMe } from '../controllers/authController.js';

router.post('/signup', signup);

router.post('/login', login);

router.get('/me', getMe);

export default router;
