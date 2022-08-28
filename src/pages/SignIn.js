//import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation,
    Navigate,
} from "react-router-dom";
import {useState} from 'react';
import './Form.css';

function SignIn() {
    // Create variables to store user data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    // When user presses "sign in"
    const handleSubmit = (event) => {
        // If login details match those saved in localStorage, log in
        if ((localStorage.getItem("email") === email) &&
            localStorage.getItem("password") === password)
            setLoggedIn(true);
    }

    if (loggedIn) {
        // If login successful, redirect user to main page
        return <Navigate replace to="/MainPage" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label>Email:
            </label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                class="form-control"
                placeholder="name@example.com"
                id="email"
                required=""
            />
            <label>Password:
            </label>
            <input
                type="password"
                class="form-control"

                // Regex pattern that requires password of
                // Length = 8-12
                // Uppercase, lowercase, numbers, symbols

                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input type="submit" value="Sign Up" class="form-control" />
            <br /><br /><br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
        </form>
    )
}

export default SignIn;
