const jwt = require('jsonwebtoken');
const User = require('../models/Users');  // Adjust the path to your User model if needed

// Middleware to protect routes (ensure user is authenticated)
const protect = async (req, res, next) => {
  let token;

  // Check if token is in the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from the Authorization header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the decoded token
      req.user = await User.findById(decoded.id).select('-password'); // Avoid sending password

      next();  // Proceed to the next middleware or route handler
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };