import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import '../../styles/organisms/UserCard.css';

function UserCard({ usuario, esActual }) {
    const esAdmin = usuario.correo.endsWith('@tiendavidere.com');

    return (
        <Card className="user-card">
            <Image src="/images/iconoPerfil192x192.webp" alt={'Foto de ' + usuario.nombreUsuario} className="user-card__avatar" />
            <Card.Body className="user-card__cuerpo">
                <Text variant="h5">{usuario.nombreUsuario}{esActual ? ' (tú)' : ''}</Text>
                <Text>{usuario.correo}</Text>
                <Text>Rol: {esAdmin ? 'Administrador' : 'Cliente'}</Text>
                <Text>Compras: {usuario.compras}</Text>
            </Card.Body>
        </Card>
    );
}

export default UserCard;