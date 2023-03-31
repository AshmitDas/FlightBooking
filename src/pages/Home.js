import './welcome.css';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import React,{ useState, useEffect, useContext } from 'react';
import FlightCards from '../components/FlightCards';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import AppContext from '../context/AppContext';


export default function Home() {

    const storeData = useContext(AppContext);


    // async function getFlights(e){
    //     e.preventDefault();
    //     let to = document.getElementById('to').value;
    //     let from = document.getElementById('from').value;
    //     let date = document.getElementById('date').value;

        
    //     if(from === ""){
    //         toast.error("Please Enter FROM Value")
    //     }else if(to === ""){
    //         toast.error("Please Enter TO Value")
    //     }else if(date === ""){
    //         toast.error("Please Select Paticular Date")
    //     }
    //     console.log(to, from, date);

    

    return (
        <div>

            <div>
                <Toaster/>
                <div class="second">
                    <h2 class="second-h2">Compare and book flights with ease  <ion-icon name="airplane-sharp"></ion-icon></h2>
                    <p>Discover your next dream destination</p>
                    <h3 class="second-h2  fw-medium m-4  text-red">Plan your journey here <ion-icon name="download-outline"></ion-icon></h3>

                    <div class="filter">
                        <div>
                            <label for="from" class="fst-italic">From</label><br></br>
                            <input id="from" class="box" type="text" placeholder='From Where?' onChange={(e)=>{storeData.changeFrom(e.target.value)}} required />
                        </div>
                        {/* <p><ion-icon name="repeat-sharp"></ion-icon></p> */}
                        <div>
                            <label for="to" class="fst-italic">To</label><br></br>
                            <input id="to" class="box" type="text" placeholder='To Where?' onChange={(e)=>{storeData.changeTo(e.target.value)}} required/>
                        </div>
                        <div>
                            <label for="date" class="fst-italic">Date of journey</label><br></br>
                            <input id="date" class="box" type="date" onChange={(e)=>{storeData.changeDate(e.target.value)}} required/>
                            
                            <Link to={`/getFlights`}><button type='button' class="search">Search</button></Link>
                        </div>

                    </div>

                    <div class="covid">
                        <p><ion-icon name="information-circle-sharp"></ion-icon>  Coronavirus(COVID-19) may affect your plans.<a href='https://www.who.int/'>Learn more</a></p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


{/* <div className='d-flex flex-column'>

{load? (
    <>
    <Footer />
    </>
    
):(
    flights.map((flight) => {
        return (
            <FlightCards key={flight._id} flight={flight} />
        )
    })
)}
</div> */}