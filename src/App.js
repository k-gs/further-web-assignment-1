////// App.js
import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation,
} from "react-router-dom";

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileEdit from "./pages/Profile_Edit";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

// Create a custom hook that uses both useLocation and useEffect
// const useScrollToTop = () => {
//     const location = useLocation();
//     useEffect(() => {
//         window.scrollTo({top: 0});
//         // scroll to the top of the browser window when changing route
//         // the window object is a normal DOM object and is safe to use in React.
//     }, [location]);
// };

// The root component
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
