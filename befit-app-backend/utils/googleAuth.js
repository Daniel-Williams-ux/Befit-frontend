const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

module.exports = (passport) => {
  // Google OAuth strategy setup
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if user exists with the provided googleId
          let user = await User.findOne({ googleId: profile.id });

          if (!user) {
            // If user doesn't exist, create a new user
            user = await User.create({
              googleId: profile.id,
              email: profile.emails[0].value,
              name: profile.displayName,
            });
          }

          // Optionally, generate a JWT token
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

          // Pass only the user ID to the done callback
          return done(null, user._id);  // Serialize only the user ID (user._id) into the session
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );

  // Serialize user: store the user ID in the session
  passport.serializeUser((userId, done) => {
    done(null, userId);  // Serialize the user ID (user._id or user.googleId)
  });

  // Deserialize user: retrieve user information from the session using the ID
  passport.deserializeUser(async (userId, done) => {
    try {
      const user = await User.findById(userId);  // Retrieve user by ID from the database
      done(null, user);  // Attach the user object to req.user
    } catch (err) {
      done(err, null);  // Error handling
    }
  });
};