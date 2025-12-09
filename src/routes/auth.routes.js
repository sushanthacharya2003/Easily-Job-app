import express from 'express';
const router = express.Router();

import { register, login, logout, handleRegister } from '../controllers/auth.controller.js';

router.get('/register', register);
router.get('/login', login);
router.get('/logout', logout);
router.post('/register', handleRegister);
router.post('/login', handleLogin);

export default router;

