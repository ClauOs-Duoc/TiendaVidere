import React from 'react';
import { Container } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import '../styles/pages/Home.css';

function Home() {
    return (
        <Container className="home">
            <Text variant="h1">Página de Inicio</Text>
            <Text>Bienvenidos a nuestro sitio web.</Text>
        </Container>
    );
}

export default Home;