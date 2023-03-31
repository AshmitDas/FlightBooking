
import React, { useState } from "react";
import './welcome.css';

function Login() {
    const [values, setValues] = useState({
        username: "", email: "", password: ""
    });

    const set = (name) => {
        return ({ target: { value } }) => {
            setValues((oldValues) => ({ ...oldValues, [name]: value }));
        };
    };

    const saveFormValues = async () => {
        const response = JSON.stringify(values);
        console.log(response)
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        try {
            await saveFormValues()
            alert('You are successfully Logged In!');
            setValues({
                username: "", email: "", password: ""
            });
        } catch (e) {
            alert(`Login failed! ${e.message}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} class="login-one d-grid p-5">
            <h2>Enter Your Credentials</h2>
        
            <label>User Name*:</label>
            <input
                type="text" required
                value={values.username} onChange={set("username")}
            />
           
            
            <label>Email:</label>
            <input
                type="email" required
                value={values.email} onChange={set("email")}
            />
            
            <label>Password</label>

            <input
                type="text" required
                value={values.password} onChange={set("password")}
            />


            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;