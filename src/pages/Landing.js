import {useState} from 'react';
import {
    Navigate,
} from "react-router-dom";
import landingImage from "./Landing-Page-Image.jpg";
import "./Landing.css";


function Landing() {
    // Value to check if user has clicked sign up
    const [signedUp, setSignedUp] = useState(false);

    // If user clicks sign up
    function signUp() {
        setSignedUp(true);
    }

    // Redirect on clicking sign up
    if (signedUp) {
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
