import { Nav, Navbar, Container } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar variant="dark" bg="blue" expand="md">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={require('../assets/logo.png')}
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#home">Schedule</Nav.Link>
              <Nav.Link href="#home">Resources</Nav.Link>
              <Nav.Link href="#home">Join</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header