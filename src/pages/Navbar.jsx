import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
function NavbarFunc() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/"> Home </Nav.Link>
                    <Nav.Link href="/about"> About </Nav.Link>
                    <Nav.Link href="/projects"> Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    );
}

export default NavbarFunc;
