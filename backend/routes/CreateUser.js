const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', async (req, res) => {
    const { name, email, password, location } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne
        ({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        } else {
            user = new User({
                name,
                email,
                password,
                location
            });
        }   
        await user.save();
        res.send('User registered successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
);
