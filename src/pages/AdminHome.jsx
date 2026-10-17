import React from 'react';
import { Container } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import '../styles/pages/AdminHome.css';

function AdminHome() {
    const correoSesion = localStorage.getItem('sesionCorreo');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find((u) => u.correo === correoSesion);
    const nombre = usuario ? usuario.nombreUsuario : 'Administrador';

    return (
        <Container className="admin-home">
            <Text variant="h1">Panel de administración</Text>
            <Text>Bienvenido, {nombre}.</Text>
        </Container>
    );
}

export default AdminHome;