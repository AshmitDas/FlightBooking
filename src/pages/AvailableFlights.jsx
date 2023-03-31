import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import FlightCards from '../components/FlightCards';

export default function AvailableFlights() {

    const getValue = useContext(AppContext);
    const [load, setLoad] = useState(true);
    const [available, setAvailable] = useState(true);
    const [flights, setFlights] = useState();


    async function getFlightDetails() {
        axios.get(`http://localhost:9999/api/getFlight/?to=${getValue.to}&from=${getValue.from}&date=${getValue.date}`)
            .then((response) => {
                console.log(response.data.flights);
                setFlights(response.data.flights);
                setLoad(false);
            })
            .catch((err) => {
                toast.error("There is no such flights Available! Please ENTER CORRECT Destination");
                setLoad(false);
                setAvailable(false);
                
            })
    }

    useEffect(() => {
        getFlightDetails()
    },[]);


    return (
        <div className='d-flex flex-column'>
            {load ? (
                <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ): available ? (
                flights.map((flight) => {
                    return (
                        <FlightCards key={flight._id} flight={flight} />
                    )
                })
            ): "No Flight Available!"}
        </div>
    )
}
