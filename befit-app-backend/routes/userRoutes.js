const express = require('express');
const { protect } = require('../middleware/auth');
const {
  saveStep2,
  saveStep3,
  saveStep4,
  saveStep5,
  saveStep6,
  getUserDetails,
} = require('../controllers/userController');

const router = express.Router();

// Onboarding Steps
router.post('/step2', protect, saveStep2);
router.post('/step3', protect, saveStep3);
router.post('/step4', protect, saveStep4);
router.post('/step5', protect, saveStep5);
router.post('/step6', protect, saveStep6);

// Fetch User Data
router.get('/profile', protect, getUserDetails);

module.exports = router;
