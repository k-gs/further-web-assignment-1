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

    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const date = localStorage.getItem("date");

    return (
        <body>
            <h1>Profile Page</h1>
            <p id = "user_name">{name}</p>
            <p id = "user_email">{email}</p>
            <p id = "join_date">{date}</p>         
        </body>


    )
    
}

export default Profile;

