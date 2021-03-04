import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './styles/Header.css';
import whiteLogo from '../../images/whiteLogo.png';
import coloredLogo2 from '../../images/coloredLogo2.png';
import { HashLink } from 'react-router-hash-link';

function Header(props) {
  const [headerState, setHeaderState] = useState('beforeScroll');
  const [headerLogo, setHeaderLogo] = useState(whiteLogo);
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -40;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };
  const handleScroll = () => {
    if (window.pageYOffset > 60) {
      if (headerState === 'beforeScroll') {
        setHeaderState('afterScroll');
        setHeaderLogo(coloredLogo2);
      }
    } else {
      if (headerState === 'afterScroll') {
        setHeaderState('beforeScroll');
        setHeaderLogo(whiteLogo);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header className={headerState}>
      <Navbar fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={headerLogo} alt="header-logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#aboutLaptoptory"
                className="nav-link"
              >
                ABOUT
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#ourServices"
                className="nav-link"
              >
                SERVICES
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#whyLaptoptory"
                className="nav-link"
              >
                WHY LAPTOPTORY
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#testimonials"
                className="nav-link"
              >
                TESTIMONIALS
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#faq"
                className="nav-link"
              >
                FAQ
              </HashLink>
              <a
                href="/team"
                className="nav-link"
              >
                TEAM
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
