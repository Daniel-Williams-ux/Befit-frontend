// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: false }, // Optional for Google login
//   googleId: { type: String, unique: true, sparse: true }, // To allow email-only users
//   gender: { type: String, required: true }, // Gender field to store user's choice
//   age: { type: Number, required: true },
//   height: { type: String, required: true },
//   weight: { type: String, required: true },
//   goal: { type: String, required: true }, // Fitness goal
//   lifestyle: { type: String, required: true }, // Lifestyle preference
//   country: { type: String, required: true }, // Country field
// });


// // Hash password before saving (only if modified and exists)
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password') || !this.password) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to compare passwords
// userSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// module.exports = mongoose.model("User", userSchema);

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
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);