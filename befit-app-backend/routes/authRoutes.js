const express = require("express");
const { check } = require("express-validator");
const { signup } = require("../controllers/authControllers");

const router = express.Router();

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

module.exports = router;