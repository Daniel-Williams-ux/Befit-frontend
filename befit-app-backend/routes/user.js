const express = require('express');
const router = express.Router();

// POST route for /api/user/step2
router.post('/step2', (req, res) => {
  const { gender } = req.body;  // Extract gender from the request body

  if (!gender) {
    return res.status(400).json({ message: 'Gender is required' });
  }

  // Here, you would save the gender to your database or perform other operations
  console.log('Gender received:', gender);

  // Respond back with a success message
  return res.status(200).json({ message: 'Gender saved successfully' });
});

module.exports = router;