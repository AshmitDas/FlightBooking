const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017';

const connectDB = () => {
    return mongoose.connect(mongoUrl)
}

module.exports = connectDB