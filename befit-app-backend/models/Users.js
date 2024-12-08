const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // Optional for Google users
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // Allows email-only users
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  age: {
    type: Number,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  goal: {
    type: String,
  },
  lifestyle: {
    type: String,
  },
  country: {
    type: String,
  },
});

// Hash password before saving (only if modified and exists)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Users = mongoose.model('User', userSchema);

module.exports = Users;
