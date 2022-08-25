// App.js
import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation,
} from "react-router-dom";

import Form from './pages/Form';
import LandingPage from './pages/Landing';

// Create a custom hook that uses both useLocation and useEffect
const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0});
        // scroll to the top of the browser window when changing route
        // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
};

// // This is corresponding to "/" route
// const Home = (props) => {
//     useScrollToTop();
//     return (
//         <Form />
//         // <>
//         //     <h1>Home</h1>
//         //     <hr />
//         //     <p style={{marginTop: "150vh"}}>
//         //         <Link to="/contact">Go to contact page</Link>
//         //     </p>
//         // </>
//     );
// };

// // This is corresponding to "/contact" route
// const Landing = (props) => {
//     useScrollToTop();
//     return (
//         <LandingPage />
//         // <>
//         //     <h1>Contact</h1>
//         //     <hr />
//         //     <p style={{marginTop: "150vh"}}>
//         //         <Link to="/">Go to homepage</Link>
//         //     </p>
//         // </>
//     );
// };

// The root component
const App = () => {
    return (
        <div style={{padding: 50}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/LandingPage" element={<LandingPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
