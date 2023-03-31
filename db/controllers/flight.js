const Flight = require('../models/Flights');

getFlightsByToAndFrom = async (req, res) => {
    const { to, from, date} = req.query;

    try {
        const flights = await Flight.find({ to, from, date});

        // If there is no such flights avaiable for either to or from
        if (flights.length === 0) {
            return res.status(404).json({ message: 'No flights found for the specified origin and destination' });
        }

        // Check if all flights have a matching 'to' and 'from'
        flights.forEach(flight => {
            if (flight.to !== to || flight.from !== from) {
                throw new Error('Some flights do not match the specified origin and destination');
            }
        });

        res.status(201).json({ flights });
    } catch (error) {
        console.log("error")
        res.send(400).json({
            message: "No flights available"
        })
    }
};


addSeatNumber = async (req, res) => {

    const { arrayToAdd } = req.body;
    console.log(arrayToAdd);
    const { id } = req.params;

    try {
        const updatedDoc = await Flight.findByIdAndUpdate(
            id,
            { $push: { seatBooked: { $each: arrayToAdd } } },
            { new: true }
        );

        res.status(200).json(updatedDoc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getCabin = async (req, res) => {
    const { id } = req.params; // get the document ID from the request parameters

    try {
        const flight = await Flight.findById(id); // find the document by ID
        const cabinTypes = flight.CabinTypes; // retrieve the desired property from the document
        res.status(200).json({ cabinTypes }); // return the property as JSON in the response
    } catch (error) {
        res.status(404).json({ message: error.message }); // return an error message if the document cannot be found
    }
};


const getSeatBooked = async (req, res) => {
    const { id } = req.params; // get the document ID from the request parameters

    try {
        const flight = await Flight.findById(id); // find the document by ID
        const seatNumber = flight.seatBooked; // retrieve the desired property from the document
        res.status(200).json({ seatNumber }); // return the property as JSON in the response
    } catch (error) {
        res.status(404).json({ message: error.message }); // return an error message if the document cannot be found
    }
};


module.exports = {
    getFlightsByToAndFrom,
    addSeatNumber,
    getCabin,
    getSeatBooked
}