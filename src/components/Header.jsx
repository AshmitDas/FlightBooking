import React from 'react';
import '../pages/welcome.css'
import { Link } from 'react-router-dom';
import './seats.css'

export default function Header() {
    return (
        <>
            <header>
                <div class="navbar-dark gradient d-flex p-3 justify-content-between">
                    <div>
                        <h2 class="first-h2">Welcome to Flight Booking.com</h2>
                    </div>
                    <div class="button-login">
                        <div>
                            <Link to="/login"> <button class="login">Login</button></Link>
                        </div>
                        <div class="sign-up">
                            <Link to="/signup"><button class="login sign-up">Sign Up</button></Link>
                        </div>
                    </div>

                </div>


                <nav class="navbar nav-bar-one  navbar-expand-lg navbar-dark gradient">

                    <div>

                        <div class="collapse navbar-collapse p-2 m-1" id="navbarNav">
                            <ul class="navbar-nav gap-4">
                                <li class="nav-item active">
                                    <Link to={"/"} style={{ textDecoration: 'none' }}><a className="home" href='/'><ion-icon name="home-sharp"></ion-icon>Home</a></Link>
                                </li>

                                <li class="nav-item">
                                    <a class="home" href="https://in.hotels.com/"><ion-icon name="business-sharp"></ion-icon> Hotels</a>
                                </li>
                                <li class="nav-item">
                                    <a class="home" href="https://www.agoda.com/" ><ion-icon name="accessibility-sharp"></ion-icon> Holiday Packages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="home" href="https://www.irctc.co.in/" ><ion-icon name="train-sharp"></ion-icon> Trains</a>
                                </li>
                                <li class="nav-item">
                                    <a class="home" href="https://www.redbus.in/"><ion-icon name="bus-sharp"></ion-icon> Buses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="home" href="https://airportstaxitransfers.com/"><ion-icon name="car-sport-sharp"></ion-icon> Cabs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="home" href="https://rapido.bike/"><ion-icon name="bicycle-sharp"></ion-icon> Rapido</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
