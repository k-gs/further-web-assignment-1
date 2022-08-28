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

// function MainPage() {
//     return (
//         <>
//             <h1>Login Successful</h1>
//             <hr />
//             <p style={{marginTop: "150vh"}}>
//                 <Link to="/ProfileEdit">EditProfile</Link>
//                 <Link to="/Profile">ViewProfile</Link>
//             </p>
//         </>
//     );
// }

function MainPage() {
    //const [loggedIn, setLoggedIn] = useState(false);
    const [stupidBool, setStupidBool] = useState(false);
    //setStupidBool(localStorage.getItem("loggedIn"));
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("loggedIn");
    //     if (loggedInUser === "true") {
    //         setLoggedIn(true);
    //     }
    // }, []);

    function signOut() {
        setStupidBool(true);
    }

    if (stupidBool) {
        return <Navigate replace to="/" />;
    }

    return (
        <body>
            <h1>Login successful</h1>
            <button onClick={signOut}>Sign Out</button>
        </body>
    );
}

export default MainPage;
