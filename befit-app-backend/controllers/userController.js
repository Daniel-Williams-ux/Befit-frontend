// const User = require('../models/Users');

// // Save Step 2: Gender
// const saveStep2 = async (req, res) => {
//   const { gender } = req.body;

//   if (!gender) {
//     return res.status(400).json({ message: 'Gender is required' });
//   }

//   try {
//     req.user.gender = gender;
//     await req.user.save();
//     res.status(200).json({ message: 'Gender saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Save Step 3: Age, Height, Weight
// const saveStep3 = async (req, res) => {
//   const { age, height, weight } = req.body;

//   if (!age || !height || !weight) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     req.user.age = age;
//     req.user.height = height;
//     req.user.weight = weight;
//     await req.user.save();
//     res.status(200).json({ message: 'Profile details saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Save Step 4: Fitness Goal
// const saveStep4 = async (req, res) => {
//   const { goal } = req.body;

//   if (!goal) {
//     return res.status(400).json({ message: 'Fitness goal is required' });
//   }

//   try {
//     req.user.goal = goal;
//     await req.user.save();
//     res.status(200).json({ message: 'Fitness goal saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Save Step 5: Lifestyle
// const saveStep5 = async (req, res) => {
//   const { lifestyle } = req.body;

//   if (!lifestyle) {
//     return res.status(400).json({ message: 'Lifestyle is required' });
//   }

//   try {
//     req.user.lifestyle = lifestyle;
//     await req.user.save();
//     res.status(200).json({ message: 'Lifestyle saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Save Step 6: Country
// const saveStep6 = async (req, res) => {
//   const { country } = req.body;

//   try {
//     // Allow skipping by not requiring country
//     if (country) {
//       req.user.country = country;
//     }
//     await req.user.save();
//     res.status(200).json({ message: 'Country saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Controller to get the user's profile
// const getUserDetails = async (req, res) => {
//     try {
//       // Get user ID from the JWT (it is set in req.user by the protect middleware)
//       const user = await User.findById(req.user.id).select('-password');  // Exclude password
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       // Send back the user profile data
//       res.status(200).json({ user });
//     } catch (err) {
//       res.status(500).json({ message: 'Server Error', error: err.message });
//     }
//   };

// // Export all functions
// module.exports = {
//   saveStep2,
//   saveStep3,
//   saveStep4,
//   saveStep5,
//   saveStep6,
//   getUserDetails,
// };
// userController.js

const User = require('../models/User'); // Assuming you're using Mongoose for your User model

exports.updateGender = async (req, res) => {
  const { gender } = req.body;

  // Validate the gender input
  if (!gender) {
    return res.status(400).json({ message: "Gender is required" });
  }

  try {
    // Assuming `req.user` contains the authenticated user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's gender
    user.gender = gender;
    await user.save();

    // Send the success response
    res.status(200).json({ message: "Gender updated successfully" });
  } catch (error) {
    console.error("Error updating gender:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add the updateProfile function to handle age, height, and weight
exports.updateProfile = async (req, res) => {
  const { age, height, weight } = req.body;

  // Validate that all fields are provided
  if (!age || !height || !weight) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findById(req.user.id); // Assuming `req.user` contains the authenticated user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's profile
    user.age = age;
    user.height = height;
    user.weight = weight;

    await user.save();

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};