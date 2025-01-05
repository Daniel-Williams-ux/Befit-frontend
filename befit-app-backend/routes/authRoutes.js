const express = require('express');
const { protect } = require('../middleware/auth'); // The protect middleware checks if the user is authenticated
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { login, signup, validateLogin, validateSignup } = require('../controllers/authControllers');
const router = express.Router();

const checkToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded; // Store user data in request
    next();
  });
};

// router.get('/check-token', checkToken, (req, res) => {
//   res.status(200).json({ message: 'Token is valid', user: req.user });
// });

router.get('/check-token', protect, (req, res) => {
  // If we get here, it means the token is valid
  res.status(200).json({ message: 'Token is valid' });
});

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
router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

module.exports = router;