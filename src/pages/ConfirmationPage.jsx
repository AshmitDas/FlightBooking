import React from 'react'
import { useContext } from 'react'
import AppContext from '../context/AppContext';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function ConfirmationPage() {

    const storeData = useContext(AppContext);

    console.log(storeData.confirm);

    if (storeData.confirm){
        toast.success("Booking Successfull")


    } else {
        toast.error("Error! Try Again!")
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        {storeData.confirm ? (
            <>
            <h4>Booking Successfull!</h4>
  
            </>
        ) : (
            <>
            <h4>Error! Please try again!</h4>
            </>
        )}
        <Link to={"/"}><button type="button" class="btn btn-info">Back to Home</button></Link>
    </div>
  )
}