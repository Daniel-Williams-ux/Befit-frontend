const express = require("express");
const { updateGender } = require("../controllers/userController"); // Import the updateGender function
const authenticateToken = require("../middleware/authMiddleware"); // Middleware to authenticate the user (assuming you have this)
const { updateProfile } = require("../controllers/userController");
const router = express.Router();

// Protect the route with authentication middleware
router.post("/step2", authenticateToken, updateGender); // Now the route is /api/user/step2
router.post('/step3', authenticateToken, updateProfile); // /api/user/step3

module.exports = router;
