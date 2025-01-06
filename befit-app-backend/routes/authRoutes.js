const express = require("express");
const { check } = require("express-validator");
const {
  signup,
  loginUser,
  checkToken,
} = require("../controllers/authControllers");

const router = express.Router();

// Route for signup
router.post(
  "/signup",
  [
    check("email").isEmail().withMessage("Invalid email"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])/)
      .withMessage(
        "Password must include letters, numbers, and a special character"
      ),
  ],
  signup
);

// Route for login
router.post("/login", loginUser);

// Route for token validation (check-token)
router.get("/check-token", checkToken);

module.exports = router;