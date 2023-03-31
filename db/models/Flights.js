const mongoose = require('mongoose');

const FlightSchema= new mongoose.Schema({
    flightName: {
        type: String,
    },
    to: {
        type: String,
    },
    from: {
        type: String,
    },
    date: {
        type: String,
    },
    image: {
        type: String
    },
    CabinTypes: {
        type: [String],
    },
    seatBooked: {
        type: []
    }
})

module.exports = mongoose.model('Flight', FlightSchema);