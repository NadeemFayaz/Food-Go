// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://iamabnadeem99:Cplus%40909@foodgo.z93v4.mongodb.net/foodGo?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas with Mongoose!");
    } catch (e) {
        console.error("Connection error:", e);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
