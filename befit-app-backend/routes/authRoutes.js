const express = require('express');
const passport = require('passport');
const { login, register } = require('../controllers/authControllers');
//const { login, register, sendTokenResponse } = require('../controllers/authController');
const { validateLogin, validateRegister } = require('../controllers/authControllers');
const router = express.Router();

// Initialize Passport strategies
require('../utils/googleAuth')(passport);

// Google OAuth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const { token } = req.user;
    res.redirect(`${process.env.FRONTEND_URL}/?token=${token}`);
  }
);

// Traditional Registration and Login
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

module.exports = router;