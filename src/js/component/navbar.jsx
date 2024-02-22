import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarJSX() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand style={{ color: "white" }}>Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link style={{ color: "white" }}>Home</Nav.Link>
            <Nav.Link style={{ color: "white" }}>About</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Services</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarJSX;
