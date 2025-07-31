const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } 
    catch (error) {
        console.log('Error Connecting DB', error.msg);
    }
}

module.exports = connectDB;