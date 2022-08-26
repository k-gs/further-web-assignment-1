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

    //pulls email name and date out of local storage into variables
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const date = localStorage.getItem("date");

    function deleteProfile() {
        localStorage.clear()
        window.alert("Profile Deleted")
    }

    function deleteConfirmation() {
        if (window.confirm("Are you sure you want to delete your profile?")){
            deleteProfile();
        }

        
    } 
    


    return (
        <body>
            <h1>Profile Page</h1>
            <p id = "user_name">{name}</p>
            <p id = "user_email">{email}</p>
            <p id = "join_date">{date}</p>   

            <form action="/ProfileEdit">
            <input type="submit" value="Edit Profile" />
            </form>

            <button onClick={deleteConfirmation}>Delete Profile</button>
            


        </body>


    )
    
}

export default Profile;

