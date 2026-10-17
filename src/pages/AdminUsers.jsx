import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import UserCard from '../components/organisms/UserCard';
import '../styles/pages/AdminUsers.css';

function AdminUsers() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const correoSesion = localStorage.getItem('sesionCorreo');

    return (
        <Container className="admin-users">
            <Text variant="h1">Usuarios</Text>

            {usuarios.length === 0 ? (
                <Text>No hay usuarios registrados.</Text>
            ) : (
                <Row xs={1} sm={2} lg={4} className="admin-users__fila">
                    {usuarios.map((usuario) => (
                        <Col key={usuario.correo} className="admin-users__col">
                            <UserCard usuario={usuario} esActual={usuario.correo === correoSesion} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default AdminUsers;