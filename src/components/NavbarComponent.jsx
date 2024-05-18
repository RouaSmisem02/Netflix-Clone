import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', color: 'white', fontSize: '1.5rem' }}>Netflix Clone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'lightgray', fontSize: '1rem', fontWeight: 'normal' }} className={isActive('/')}>Home</Nav.Link>
          <Nav.Link as={Link} to="/favlist" style={{ color: 'lightgray', fontSize: '1rem', fontWeight: 'normal' }} className={isActive('/favlist')}>Favorites</Nav.Link>
        </Nav>
        <Nav className="ml-auto"></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
