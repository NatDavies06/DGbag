const express = require('express');
const { singup, login, logout, forgotPassword, resetPassword, updateDetails, updatePassword } = require('../controllers/auth');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/signup', singup);
router.post('/login', login);

module.exports = router;