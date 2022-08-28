import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import './Form.css';

function Profile_Edit() {
    // Values to hold email and name
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // Change users info to updated info
    const handleFormSubmit = () => {
        localStorage.setItem("email", email)
        localStorage.setItem("name", name)
    }

    // Values to hold users email and name
    const Email = localStorage.getItem("email");
    const Name = localStorage.getItem("name");

    return (
        <form onSubmit={handleFormSubmit}>
            <br />
            <h1>Edit Profile Details:</h1>
            <label>Email:
            </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                class="form-control"
                id="email"
                required=""
                placeholder={Email}
            />
            <label>Name:
            </label>
            <input
                type="name"
                onChange={(e) => setName(e.target.value)}
                class="form-control"
                id="name"
                placeholder={Name}
                required
            />
            <br />
            <input type="submit" class="form-control" />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
        </form>
    )
}

export default Profile_Edit;
