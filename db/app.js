const express = require('express');
const cors = require('cors');
const connectDB = require('./connectToDB/connect');

const {getFlightsByToAndFrom, addSeatNumber, getCabin, getSeatBooked} = require('./controllers/flight');
const {addBookingInfo} = require('./controllers/user');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/getFlight/',getFlightsByToAndFrom);
app.get('/api/getCabins/:id', getCabin);
app.get('/api/getSeats/:id', getSeatBooked);
app.patch('/api/updateSeatBooked/:id', addSeatNumber);

app.post('/api/addUser', addBookingInfo);


const start = async () => {
    try {
        await connectDB();
        app.listen(9999, () => {
            console.log("Server is running on port 9999")
        })
    } catch (error) {
        console.log(error);
    }
}

start()