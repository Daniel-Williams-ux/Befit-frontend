const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Remove useNewUrlParser and useUnifiedTopology
    await mongoose.connect(process.env.MONGO_URI); // No need for those options anymore
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure if connection fails
  }
};

module.exports = connectDB;
