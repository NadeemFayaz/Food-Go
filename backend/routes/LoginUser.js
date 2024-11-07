const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

// @route POST api/LoginUser
// @desc Login user
// @access Public

router.post('/LoginUser', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await

User.findOne
    
    ({ email });
    
        if (!user) {
        return res.status(400).json({ success: false, msg: 'User not found' });
        }
    
        // Use matchPassword method to check password
        const isMatch = await user.matchPassword(password);
    
        if (!isMatch) {
        return res.status(400).json({ success: false, msg: 'Invalid credentials' });
        }
    
        res.json({ success: true, msg: 'User logged in successfully' });
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json({ success: false, msg: 'Server error', error: err.message });
    }
}
);

module.exports = router;

