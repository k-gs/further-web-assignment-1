import {
    Navigate,
} from "react-router-dom";
import {useState} from 'react';
import './Form.css';

function SignUp() {
    // Create variables to store all user data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = () => {
        // On form submit

        // Save name, email, password and date of sign up 
        // to local storage
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        const d = new Date();
        d.getDate();

        // Format date
        localStorage.setItem("date", d.getDay() + "/" + d.getMonth() +
            "/" + d.getFullYear());

        // Set user to logged in
        setLoggedIn(true);
    }

    if (loggedIn) {
        // If user is logged in, redirect to main page
        return <Navigate replace to="/MainPage" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <br /><br />
            <label>Name:
            </label>
            <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="form-control"
                placeholder="Jane Doe"
                id="name"
                required
            />
            <label>Email:
            </label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                // Regex pattern that checks if the entered email is an
                // email

                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                class="form-control"
                placeholder="name@example.com"
                id="email"
                required
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
                required
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

export default SignUp;
