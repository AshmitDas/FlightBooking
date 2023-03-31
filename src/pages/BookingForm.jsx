import toast, { Toaster } from 'react-hot-toast';
import './welcome.css';
import axios from 'axios';
import React, { useEffect, useState, Component } from 'react'
import { useParams } from 'react-router-dom';
import SeatingArrangement from '../components/SeatingArrangement';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

function BookingForm() {


    const [cabinType, setCabinType] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seat, setSeats] = useState([])
    const [load, setLoad] = useState(true);
    const [loading, setLoading] = useState(true);
    const [bookingDetails, setBookingDetails] = useState({});
    const [price, setPrice] = useState(0);

    let { id } = useParams();
    const storeData = useContext(AppContext);

    const handleSeatSelect = (selectedIds) => {
        setSelectedSeats(selectedIds);
        console.log(selectedSeats);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        document.getElementById('submitButton').disabled = true;

        bookingDetails.seatNumbers = selectedSeats;
        bookingDetails.flightID = id;

        console.log(bookingDetails);


        axios.post("http://localhost:9999/api/addUser", bookingDetails)
        .then((response) => {
            console.log("User added");
            storeData.isConfirmed(true);
            console.log(storeData.confirm);
        })
        .catch((err) => {
            console.log("error");
            storeData.isConfirmed(true);
        })
    }

    async function getCabins() {
        axios.get(`http://localhost:9999/api/getCabins/${id}`)

            .then((response) => {
                setCabinType(response.data.cabinTypes);
                console.log(cabinType);
                setLoad(false);
            })
            .catch((err) => {
                console.log("error")
            })
    }

    async function updateFlightAvailableSeat(){

        axios.patch(`/api/updateSeatBooked/${id}`, {"seatBooked": selectedSeats})
        .then((response) => {
            console.log("Seats added to flight")
        })
        .catch((err) => {
            console.log("Seats cannot be added!")
        })
    }

    function handlechange(e){
        setBookingDetails({...bookingDetails, cabin: e.target.value});
        if(e.target.value === "economy"){
            setPrice(selectedSeats.length * 2000)
            console.log(selectedSeats.length)
        } else if (e.target.value === "first"){
            setPrice(selectedSeats.length * 12000)
        } else if(e.target.value === "business") {
            setPrice(selectedSeats.length * 10000)
        }
    }

    useEffect(() => {
    },[price])

    async function getSeats() {

        axios.get(`http://localhost:9999/api/getSeats/${id}`)
            .then((response) => {
                setSeats(response.data.seatNumber);
                console.log(cabinType);
                setLoading(false);
            })
            .catch((err) => {
                console.log("error")
            })
    }

    useEffect(() => {
        getCabins()
    }, [load])


    useEffect(() => {
        getSeats()
    }, [loading])



    return (
        <div className='Booking-form '>
            <form className='form-one p-4 mb-5'>


                <label className='col-sm-2 book-seat col-form-label'>Book Seats: </label>
                {loading ? "loading seats" : (
                    <div className='m-3 rounded border-primary-subtle'>

                        <SeatingArrangement selectedSeats={selectedSeats} disabledSeats={seat} onSeatSelect={handleSeatSelect} />
                        <p class="book-seat-no">Selected seats: {selectedSeats.join(', ')}</p>
                    </div>
                )}

                <div className="row mb-3">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})} required />
                    </div>
                </div>


                <div className="row mb-3">
                    <label for="mobile" className="col-sm-2 col-form-label">Contact No.</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" id="mobile" onChange={(e) => setBookingDetails({...bookingDetails, mobile: e.target.value})} required />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="emailID" className="col-sm-2 col-form-label">Email ID</label>
                    <div className="col-sm-6">
                        <input type="email" className="form-control" id="emailID" onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})} required />
                    </div>
                </div>


                <div className="row mb-3">
                    <label for="passport" className="col-sm-2 col-form-label">Passport No. :</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="passport" onChange={(e) => setBookingDetails({...bookingDetails, passport : e.target.value})} />
                    </div>
                </div>


                <div className="row mb-3">
                    <label for="visa" className="col-sm-2 col-form-label">Visa No. :</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" required id="visa" onChange={(e) => setBookingDetails({...bookingDetails, visa: e.target.value})} />
                    </div>
                </div>

                <label for="cabin" className="col-sm-2 col-form-label">Cabin :</label>
                <select class="form-select-md bg-white" id='cabin' style={{
                    textDecoration: "none",
                    borderRadius: "5px",
                    border: "1px solid lightgrey",
                    padding: "6px"
                }} aria-label="Default select example" onChange={(e) => {handlechange(e)}}>
                    <option class="col-sm-6" selected>Select Cabin</option>
                    {load ? "loading cabin data" : cabinType.map((cabin) => {
                        return (
                            <option className='col-md-6' value={cabin}>{cabin}</option>
                        )
                    })}
                </select>
                <br />

                <label for="cabin" className="col-sm-2 col-form-label">Price :</label>
                <p>{price}</p>

                <div className=''>
                    <Link to={'/bookingConfirmation'}><button type="button" className="btn btn-primary" id='submitButton' onClick={handleSubmit}>Book Now</button></Link>
                </div>
            </form>

            <Toaster/>
        </div>
    )
}

export default BookingForm;

