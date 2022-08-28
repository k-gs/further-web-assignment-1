////// App.js
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

// Importing all of the pages so we can set up routing
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileEdit from "./pages/Profile_Edit";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

// Main function, creates all routes for the website and places
// navbar and footer above and below all pages
const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ProfileEdit" element={<ProfileEdit />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
