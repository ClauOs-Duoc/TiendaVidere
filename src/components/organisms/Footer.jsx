import React from 'react';
import { Container } from 'react-bootstrap';
import Text from '../atoms/Text';
import '../../styles/organisms/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Text variant="small">© 2026 Tienda De Pociones Y Trinkets Videre. Todos los derechos reservados.</Text>
            </Container>
        </footer>
    );
}

export default Footer;