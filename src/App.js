import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AvailableFlights from './pages/AvailableFlights';
import BookingForm from './pages/BookingForm';
import Header from './components/Header';
import Error from './pages/error';
import Footer from './components/Footer';
import ConfirmationPage from './pages/ConfirmationPage';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/getFlights' element={<AvailableFlights />} />
        <Route path='/bookSeats/:id' element={<BookingForm />}/>
        <Route path='/bookingConfirmation' element={<ConfirmationPage />} />

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
