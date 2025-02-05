require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/sarthak";
//  || `mongodb://0.0.0.0/database` || `mongodb://127.0.0.1/database`; // Add database name

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); // Exit process if DB connection fails
    }
};

module.exports = connectDb;
