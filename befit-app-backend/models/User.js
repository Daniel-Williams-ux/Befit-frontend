const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  gender: {
    type: String,
    required: false, // Gender is optional until Step 2 is completed
  },
  age: {
    type: Number,
    required: false, // Age can be added after Step 3
  },
  height: {
    type: Number,
    required: false, // Height can be added after Step 3
  },
  weight: {
    type: Number,
    required: false, // Weight can be added after Step 3
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);