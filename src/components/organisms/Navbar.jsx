import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/organisms/Navbar.css';

function NavBar() {
    return (
        <Navbar variant="dark" expand="lg" className="navbar-tienda">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;