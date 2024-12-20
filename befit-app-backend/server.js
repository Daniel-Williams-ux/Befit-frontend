require('dotenv').config(); // Load environment variables

const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const expressSession = require('express-session');
const passport = require('passport');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse cookies
app.use(cookieParser());  // Parse cookies

// Middleware for JSON request bodies
app.use(express.json());

// Session middleware setup (must be before passport.initialize())
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET || 'your-secret-key', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Use `secure: true` in production with HTTPS
      httpOnly: true,
    },
  })
);

// Initialize Passport after session middleware
app.use(passport.initialize());
app.use(passport.session()); // Add passport session middleware here

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'https://your-frontend-domain.com'], // Adjust frontend URLs as needed
  credentials: true, // Allow cookies
};
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});