import React, {useContext} from "react";
import {Link} from "react-router-dom";
import UsernameContext from "../contexts/UsernameContext";

function Navbar() {
    // Navbar is opting-in to view and mutate username state.
    const {username, logoutUser} = useContext(UsernameContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">React App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {username !== null &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">My Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/forum">Forum</Link>
                                </li>
                            </>
                        }
                    </ul>
                    <ul className="navbar-nav">
                        {username === null ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            :
                            <>
                                <li className="nav-item">
                                    <span className="nav-link text-light">Welcome, {username}</span>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" onClick={logoutUser}>Logout</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
