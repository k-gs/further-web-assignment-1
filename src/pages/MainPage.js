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

function MainPage() {
    return (
        <h1>Login successful</h1>
    );
}

//function MainPage() {
//    const [loggedIn, setLoggedIn] = useState(null);
//    useEffect(() => {
//        const loggedInUser = localStorage.getItem("loggedIn");
//        if (loggedInUser) {
//            setLoggedIn(loggedInUser);
//        }
//    }, []);
//
//    if (!loggedIn) {
//        return <Navigate replace to="/" />;
//    } else {
//        return (
//            <h1>Login successful</h1>
//        );
//    }
//};

export default MainPage;
