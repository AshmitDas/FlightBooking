import React from 'react';
import { Link } from 'react-router-dom';
import './seats.css'

export default function FlightCards({ flight }) {
  return (
    <div class="card m-3" >
      <div class="row g-0">
        <div class="flight-image col-md-4">
          <img src={flight.image} class="img-fluid rounded-start" style={{width: "25%"}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex justify-content-around align-items-center">
            <h5 class="card-title">Airline :{flight.flightName}</h5>
            <p class="card-text" style={{margin: "none"}}>To: {flight.to}</p>
            <p className='card-text' style={{margin: "none"}}>From: {flight.from}</p>
            <p className='card-text' style={{margin: "none"}}>From: {flight.date}</p>

            <Link to={`/bookSeats/${flight._id}`}><button type="button" class="btn btn-success">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
