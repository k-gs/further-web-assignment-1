import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-dom';
//import "./Navbar.css";

function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/"> LAN</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="SignIn">Sign In</Nav.Link>
                    <Nav.Link href="SignUp">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavigationBar;
