// createuser.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure the path to user.js is correct
const { body, validationResult } = require('express-validator');

// @route POST api/CreateUser
// @desc Register new user
// @access Public
router.post(
  '/CreateUser',
  [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').isString().withMessage('Name must be a string'),
    body('geolocation').isString().withMessage('Location must be a string') // changed from 'location' to 'geolocation'
  ],
  async (req, res) => {
    console.log("Request Body:", req.body); // Add this line for debugging

    const errors = validationResult(req);

    // Check if validation failed
    if (!errors.isEmpty()) {
      console.log("Validation Errors:", errors.array()); // Add this for debugging
      return res.status(400).json({ errors: errors.array() });
    }

    // Process registration if validation passed
// Inside createuser.js
try {
  const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      geolocation: req.body.geolocation
  });
  res.json({ success: true, msg: 'User created successfully' });
} catch (err) {
  console.error('Error in creating user:', err);
  res.status(500).json({ success: false, msg: 'Server error', error: err.message });
}

  }
);





module.exports = router;
