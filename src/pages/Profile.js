import {useState} from 'react';
import {Navigate} from "react-router-dom";
import './Form.css';
import logo from './8.jpg';


function Profile() {
    //pulls email name and date out of local storage into variables
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const date = localStorage.getItem("date");

    // Bool checks for redirect
    const [toRedirect, setToRedirect] = useState(false);

    //clears local storage
    function deleteProfile() {
        localStorage.clear()
        window.alert("Profile Deleted")
        setToRedirect(true);
    }

    //creates a text popup to confirm you want to delete your profile
    //calls the delete profile function
    function deleteConfirmation() {
        if (window.confirm("Are you sure you want to delete your profile?")) {
            deleteProfile();
        }
    }

    if (toRedirect) {
        return <Navigate replace to="/" />;
    }

    return (
        <body>
            <div className='profile_body'>
                <br />
                <h1>Profile Page</h1>
                <img src={logo} alt="logo" />
                <br />
                <br />
                <p id="user_name">{name}</p>
                <p id="user_email">{email}</p>
                <p id="join_date">{date}</p>
                <form action="/ProfileEdit">
                    <input type="submit" value="Edit Profile" />
                </form>
                <br />
                <button onClick={deleteConfirmation}>Delete Profile</button>
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
            </div>
        </body>
    )

}
export default Profile;

