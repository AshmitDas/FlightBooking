const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    mobile: {
        type: Number,
        required: [true, "Mobile number is neccessary"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is neccessary"],
        trim : true
    },
    passport: {
        type: String,
        trim : true
    },
    flightID: {
        type: String
    },
    visa: {
        type: String,
        trim : true
    },
    cabin: {
        type: String,
        trim : true
    },
    seatNumbers: {
        type: []
    }
})

module.exports = mongoose.model('User', UserSchema);