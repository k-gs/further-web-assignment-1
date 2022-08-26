//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
//import ReactDOM from 'react-dom/client';
//import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
//import './Form.css';
//import LandingPage from './Landing'

//import ReactDOM from 'react-dom/client';


function Profile() {

    const email = localStorage.getItem('email')
    const name = localStorage.getItem('name')
    const date = localStorage.getItem("date");
    document.getElementById("user_email").innerHTML = email;
    document.getElementById("user_name").innerHTML = name;
    document.getElementById("join_date").innerHTML = date;

    return (
        <html>
        <body>
            <h1>Profile Page</h1>
            <p id = "user_email">Placeholder Email</p>
            <p id = "user_name">Placeholder Name</p>
            <p id = "join_date">Placeholder Date</p>
                        
        </body>
        <input type="submit" class="form-control" />
        </html>

    )
    
}

export default Profile;

