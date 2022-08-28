import {useState} from 'react';
import {
    Link,
    Navigate,
} from "react-router-dom";


function MainPage() {
    // Vars to hold users name and whether they've clicked sign out
    const [signedOut, setSignedOut] = useState(false);
    const Name = localStorage.getItem("name");

    // If user clicks sign out
    function signOut() {
        setSignedOut(true);
    }

    // On sign out, redirect to home page
    if (signedOut) {
        return <Navigate replace to="/" />;
    }

    return (
        <body>
            <div className='profile_body'>
                <br /><br />
                <h1>Welcome, {Name}</h1>
                <Link to="/Profile">View your Profile</Link>
                <br />
                <Link to="/">Make your first post</Link>
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <button onClick={signOut}>Sign Out</button>
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
            </div>
        </body>
    );
}

export default MainPage;
