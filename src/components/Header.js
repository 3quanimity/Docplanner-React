import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
      <Navbar bg="white" expand="md">
        <Navbar.Brand href="#home">
          <img
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="docplanner logo"
            class="docplanner-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: "flex-end" }}
          id="basic-navbar-nav"
        >
          <Nav>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
            <NavDropdown title="Departments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Marketing & PR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Customer Success & Sales
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HR & More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
