// user.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    geolocation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// Define the matchPassword method
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

// Make sure to export the model
module.exports = mongoose.model('User', UserSchema);
