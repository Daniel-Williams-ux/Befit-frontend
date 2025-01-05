const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');



// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Helper to send token as an HTTP-only cookie
const sendTokenResponse = (user, res) => {
  const token = generateToken(user._id);

  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Enable for HTTPS
  };

  res
    .cookie('token', token, cookieOptions)
    .status(200)
    .json({ success: true, user: { id: user._id, email: user.email }, token });
};

// Validate Signup Inputs
const validateSignup = [
  check('email').isEmail().withMessage('Invalid email'),
  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage('Password must include letters, numbers, and a special character'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
// const validateSignup = [
//   check('email').isEmail().withMessage('Invalid email'),
//   check('password')
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least 6 characters long'),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       console.error('Validation errors:', errors.array()); // Log validation errors
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   },
// ];


// **Validate Login Inputs** (add this function)
const validateLogin = [
  check('email').isEmail().withMessage('Invalid email'),
  check('password').notEmpty().withMessage('Password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Register Controller
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed Password:', hashedPassword); // Log the hashed password

    // Create new user
    const newUser = await User.create({ email, password: hashedPassword });

    // Send token as HTTP-only cookie
    sendTokenResponse(newUser, res);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Find the user by email (and ensure password is included)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the entered password with the stored hash
    const isMatch = await bcrypt.compare(password.trim(), user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Return success response with the token and user info
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message,
    });
  }
};


module.exports = {
  login,
  signup,
  validateSignup,
  validateLogin, // Export validateLogin
};