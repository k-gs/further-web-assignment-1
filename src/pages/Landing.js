//import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
//import './Form.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation,
    Navigate,
} from "react-router-dom";
import landingImage from "./Landing-Page-Image.jpg";
import "./Landing.css";
//import ReactDOM from 'react-dom/client';


function Landing() {
    const [stupidBool3, setStupidBool3] = useState(false);
    function signUp() {
        setStupidBool3(true);
    }
    if (stupidBool3) {
        return <Navigate replace to="/SignUp" />;
    }

    return (
        <>
            <img src={landingImage} alt="landingImage" />
            <div className='centered'>
                <h1> Loop Agile Now </h1>
                <p>A Social Network for Professionals  </p>
                <button onClick={signUp}>Sign up now!</button>
            </div>
        </>
    );
}

export default Landing;
