import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar= () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Marcas">Marcas</Nav.Link>
            <Nav.Link href="Longboards">Longboards</Nav.Link>
            <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="Ruedas">Ruedas</NavDropdown.Item>
              <NavDropdown.Item href="Tablas">
                Tablas
              </NavDropdown.Item>
              <NavDropdown.Item href="Lijas">Lijas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Rulemanes">
                Rulemanes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="Contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
         </Container>
         
    </Navbar>
     
  );
}

export default NavBar;

// import Marcas from "./components/pages/Marcas";
// import Contacto from "./components/pages/Contacto";
// import Longboards from "./components/pages/Longboards";
// import Accesorios from "./components/pages/Accesorios";
// <Route path='/Marcas' element={<Marcas />}/>
// <Route path='/Lonboards' element={<Longboards />}/>
// <Route path='/Contacto' element={<Contacto />}/>
// <Route path='/Accesorios' element={<Accesorios />}/>