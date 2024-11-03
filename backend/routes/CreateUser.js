// createuser.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure the path to user.js is correct

// @route POST api/CreateUser
// @desc Register new user
// @access Public
router.post('/CreateUser', async (req, res) => {
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
});

module.exports = router;
