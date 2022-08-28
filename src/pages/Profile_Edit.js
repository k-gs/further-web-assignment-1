//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
//import ReactDOM from 'react-dom/client';
//import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
//import './Form.css';
//import LandingPage from './Landing'
//import ReactDOM from 'react-dom/client';


function Profile_Edit() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    console.log(selectedImage);
    const handleFormSubmit = (event) => {
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
                value={Email}
            //placeholder={Email}
            />
            <label>Name:
            </label>
            <input
                class="form-control"
                type="text"
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder={Name}
                required
            />
            <input type="submit" class="form-control" />
            <div>
                {selectedImage && (
                    <div>
                        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                        <br />
                        <button onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                )}
                <br />

                <br />
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                />
            </div>
        </form>
    )
}

export default Profile_Edit;
