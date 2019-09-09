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
            <Nav className="mr-auto">
              <Nav.Link href="#home">test</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header