//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
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
import LandingPage from './Landing';

import './Form.css';

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        const d = new Date();
        d.getDate();
        localStorage.setItem("date", d.getDay() + "/" + d.getMonth() +
            "/" + d.getfullyear());

        if ((localstorage.getitem("email") === "test@mail.eu") &&
            localstorage.getitem("password") === "abcd1234$")
            setloggedin(true);
        localstorage.setitem("loggedin", true)
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
            <input type="submit" value="Log in" class="form-control" />
        </form>
    )
    // return (
    //     <Form>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //             <Form.Label>Email address</Form.Label>
    //             <Form.Control type="email" placeholder="Enter email" />
    //             <Form.Text className="text-muted" value={email}>
    //                 We'll never share your email with anyone else.
    //             </Form.Text>
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //             <Form.Check type="checkbox" label="Check me out" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //             Submit
    //         </Button>
    //     </Form>
    // );
}

export default Form;
