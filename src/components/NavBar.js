import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <image src= "https://www.google.com/search?q=logo+skate&rlz=1C1ALOY_esAR954AR954&oq=logo+skate&aqs=chrome.0.0i512l4j0i22i30j0i10i22i30j0i22i30i457j0i22i30l3.1082j0j7&sourceid=chrome&ie=UTF-8#imgrc=k402pnt47nwxLM"></image>
        <Navbar.Brand href="#home">SkateStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Marcas</Nav.Link>
            <Nav.Link href="#pricing">Longboards</Nav.Link>
            <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Ruedas">Ruedas</NavDropdown.Item>
              <NavDropdown.Item href="#Tablas">
                Tablas
              </NavDropdown.Item>
              <NavDropdown.Item href="#Lijas">Lijas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Rulemanes">
                Rulemanes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;