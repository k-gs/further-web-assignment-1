//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
//import ReactDOM from 'react-dom/client';
//import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import './Form.css';
//import LandingPage from './Landing'

//import ReactDOM from 'react-dom/client';


function Profile_Edit() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("email", email)
        localStorage.setItem("name", name)
    }
    const Email = localStorage.getItem("email");
    const Name = localStorage.getItem("name");

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Email:
            </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                class="form-control"
                id="email"
                required=""
                placeholder={Email}
            />
            <label>Name:
            </label>
            <input
                class="form-control"
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder={Name}
            />
            <input type="submit" class="form-control" />
        </form>
    )
}

export default Profile_Edit;
