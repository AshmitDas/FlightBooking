const User = require('../models/User');

const addBookingInfo = async(req, res) => {
    try{
        const bookInfo = await User.create(req.body);

        res.status(201).json({bookInfo})
    } catch(err){
        console.log("error");
        res.status(400).json({
            message: "Ticket cannot be booked"
        })
    }
}


module.exports = {addBookingInfo}