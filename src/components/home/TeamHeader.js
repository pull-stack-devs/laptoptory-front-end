import { Navbar, Container, Nav } from 'react-bootstrap';
import './styles/Header.css';
import coloredLogo2 from '../../images/coloredLogo2.png';
import { Link } from "react-router-dom";

function Header(props) {

  return (
    <header className="afterScroll">
      <Navbar fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={coloredLogo2} alt="header-logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>
              <Link
                to="/signin"
                className="nav-link"
              >
                Get Started
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
