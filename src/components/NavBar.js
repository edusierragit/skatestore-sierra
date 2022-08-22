import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar= () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Marcas</Nav.Link>
            <Nav.Link href="#longboards">Longboards</Nav.Link>
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
         <CartWidget />
    </Navbar>
     
  );
}

export default NavBar;