const MongoClient = require('mongodb').MongoClient;
// create a user schhema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    location: String,
    date: {
        type: Date,
        default: Date.now
    }
});
