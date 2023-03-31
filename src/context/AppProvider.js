import AppContext from "./AppContext";
import { useState, useEffect } from "react";

function AppProvider({children}){
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [date, setDate] = useState("");
    const [confirm, setConfirm] = useState();

    function changeTo(toValue){
        console.log(toValue);
        setTo(toValue.toLowerCase());
    }

    function changeFrom(fromValue){
        setFrom(fromValue.toLowerCase());
    }

    function changeDate(dateValue){
        setDate(dateValue);
    }

    function isConfirmed(value){
        setConfirm(value);
    }

    return(
        <AppContext.Provider value={{to, from, date, confirm, changeTo, changeFrom, changeDate, isConfirmed}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider