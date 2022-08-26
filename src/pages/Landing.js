import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './Form.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation,
    Navigate,
} from "react-router-dom";
//import ReactDOM from 'react-dom/client';


function Landing() {
    return (
        <>
            <h1>Landing Page</h1>
            <hr />
            <p style={{marginTop: "150vh"}}>
                <Link to="/SignIn">Sign In</Link>
                <Link to="/SignUp">Sign Up</Link>
            </p>
        </>
    );
}

export default Landing;
