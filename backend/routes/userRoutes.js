const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Define routes with valid callback functions
router.get('/', authMiddleware, getAllUsers); // Ensure getAllUsers is a valid function
router.get('/:id', authMiddleware, getUserById); // Ensure getUserById is a valid function

module.exports = router;