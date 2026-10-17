import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/organisms/AdminNavbar.css';

function AdminNavbar() {
    return (
        <Navbar variant="dark" expand="lg" className="navbar-admin">
            <Container>
                <Navbar.Toggle aria-controls="admin-navbar-nav" />
                <Navbar.Collapse id="admin-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/admin/productos">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/admin/usuarios">Usuarios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminNavbar;