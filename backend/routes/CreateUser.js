// createuser.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure the path to user.js is correct
const { body, validationResult } = require('express-validator');


// @route POST api/CreateUser
// @desc Register new user
// @access Public
router.post('/CreateUser',
    [
        body('email').isEmail().withMessage('Please provide a valid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('name').isString().withMessage('Name must be a string'),
        body('location').isString().withMessage('Location must be a string')
      ],
      (req, res) => {
        const errors = validationResult(req);
    
        // Check if validation failed
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        // Process registration if validation passed
        res.send('Registration successful!');
      }
    );
     async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        });
        res.json({ msg: 'User created successfully' });
    } catch (err) {
        console.error('Error in creating user:', err);
        res.status(500).json({ msg: 'Server error' });
    }
};

module.exports = router;
