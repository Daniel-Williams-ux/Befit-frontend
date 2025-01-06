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
    required: false, // Age is optional until Step 3 is completed
  },
  height: {
    type: Number,
    required: false, // Height is optional until Step 3 is completed
  },
  weight: {
    type: Number,
    required: false, // Weight is optional until Step 3 is completed
  },
  goal: {
    type: String,
    enum: ["weight_loss", "muscle_gain", "maintain_fitness"],
    required: false, // Fitness goal is optional until Step 4 is completed
  },
  lifestyle: {
    type: String,
    enum: ["sedentary", "moderately_active", "very_active"],
    required: false, // Lifestyle is optional until Step 5 is completed
  },
  country: {
    type: String,
    required: false, // Optional
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