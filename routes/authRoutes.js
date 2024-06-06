// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Import the controller functions for handling authentication
const { login, logout, register } = require('../controllers/authController');

// Login route
router.post('/login', login);

// Logout route
router.get('/logout', logout);

// Register route
router.post('/register', register);

module.exports = router;
