import { Nav, Navbar, Container } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar variant="dark" bg="blue" expand="md" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              src={require('../public/logo.png?resize&sizes[]=70&sizes[]=140')}
              height="30"
              alt="Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="">Join</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header