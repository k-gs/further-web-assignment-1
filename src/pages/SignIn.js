import 'bootstrap/dist/css/bootstrap.min.css';
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        if ((localStorage.getItem("email") === email) &&
            localStorage.getItem("password") === password)
            setLoggedIn(true);
        localStorage.setItem("loggedIn", true)
    }

    if (loggedIn) {
        console.log("Redirecting...")
        return <Navigate replace to="/LandingPage" />;
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <input type="submit" value="Sign In" class="form-control" />
        </form>
    )
}

export default SignIn;
