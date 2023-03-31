import React, { Component } from "react";
import './welcome.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            emailId: '',
            dob: '',
            gender: 'select',
            contact: '',
            country: 'select',
            password: '',
            formErrors: {}
        };

        this.initialState = this.state;
    }

    onFormValidation() {
        const { userName, emailId, dob, gender, contact, country,password } = this.state;
        let formErrors = {};
        let formIsValid = true;

        //User name     
        if (!userName) {
            formIsValid = false;
            formErrors["userNameErr"] = "Name is required.";
        }

        //EmailId   
        if (!emailId) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {

            formIsValid = false;
            formErrors["emailIdErr"] = "Invalid email id.";
        }

        //DOB    
        if (!dob) {
            formIsValid = false;
            formErrors["dobErr"] = "DOB is required.";
        }
        else {
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
            if (!pattern.test(dob)) {
                formIsValid = false;
                formErrors["dobErr"] = "Invalid date of birth";
            }
        }

        //Gender    
        if (gender === '' || gender === "select") {
            formIsValid = false;
            formErrors["genderErr"] = "Select gender.";
        }

        //Contact   
        if (!contact) {
            formIsValid = false;
            formErrors["contactErr"] = "Conatact is required.";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(contact)) {
                formIsValid = false;
                formErrors["contactErr"] = "Invalid Contact number.";
            }
        }

        //country    
        if (country === '' || country === "select") {
            formIsValid = false;
            formErrors["countryErr"] = "Select country.";
        }
        
        // password
        if (!password) {
            formIsValid = false;
            formErrors["passwordErr"] = "password is required.";
        }
        else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/.test(password))) {

            formIsValid = false;
            formErrors["passwordErr"] = "Invalid password";
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.onFormValidation()) {
            alert('You have been successfully submitted.')
            this.setState(this.initialState)
        }
    }

    render() {

        const { userNameErr, emailIdErr, dobErr, genderErr, contactErr, countryErr,passwordErr } = this.state.formErrors;

        return (
            <div class="login-one">
                <h3 style={{ textAlign: "center" }} >Signup Form</ h3>
                <div>
                    <form class="m-5" onSubmit={this.onSubmit}>
                        <div>
                            <label htmlFor="userName">Name</label><br></br>
                            <input type="text" name="userName" class="signup-input"
                                value={this.state.userName}
                                onChange={this.onChange}
                                placeholder="Your name.."
                                className={userNameErr ? ' showError' : ''} />
                            {userNameErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{userNameErr}</div>
                            }

                        </div>
                        <div>
                            <label htmlFor="emailId">Email Id</label><br></br>
                            <input type="text" name="emailId" required
                                value={this.state.emailId}
                                onChange={this.onChange}
                                placeholder="Your email id.."
                                className={emailIdErr ? ' showError' : ''} />
                            {emailIdErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>
                            }

                        </div>
                        <div>
                            <label htmlFor="text">DOB</label><br></br>
                            <input type="text" name="dob"
                                value={this.state.dob}
                                onChange={this.onChange}
                                placeholder="DD/MM/YYYY.."
                                className={dobErr ? ' showError' : ''} />
                            {dobErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label><br></br>
                            <select name="gender" onChange={this.onChange}
                                className={genderErr ? ' showError' : ''}
                                value={this.state.gender} >
                                <option value="select">--Select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {genderErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="contact">Phone Number</label><br></br>
                            <input type="text" name="contact"
                                onChange={this.onChange}
                                value={this.state.contact}
                                placeholder="Your phone number.."
                                className={contactErr ? ' showError' : ''} />
                            {contactErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{contactErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="country">country</label><br></br>
                            <select name="country"
                                value={this.state.country}
                                onChange={this.onChange}
                                className={countryErr ? ' showError' : ''} >
                                <option value="select">--Select--</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                            {countryErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{countryErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br></br>
                            <input type="text" name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                placeholder="Create password"
                                className={passwordErr ? ' showError' : ''} />
                            {passwordErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
                            }

                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div >
        )
    }
}

export default Signup;