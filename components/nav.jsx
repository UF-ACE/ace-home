import { Nav, Navbar, Container } from 'react-bootstrap';
import React from 'react';

import logo from '../public/logo.png?resize&sizes[]=140';

function Header() {
  return (
    <>
      <Navbar variant="dark" bg="blue" expand="md" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              height="30"
              alt="Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="navbar" className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="https://events.uf-ace.com/">Events</Nav.Link>
              <Nav.Link href="https://uf-ace.slack.com">Join Slack</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
