import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './Photos/favicon.png'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Denny N J</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
            <Nav.Link as={Link} to={'/projects'}>Projects</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavbarBrand>My Portfolio</NavbarBrand>
            <NavbarBrand>
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </NavbarBrand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;