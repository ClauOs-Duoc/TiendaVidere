import React from 'react';
import { Container } from 'react-bootstrap';
import BrandBlock from '../molecules/BrandBlock';
import AuthButtons from '../molecules/AuthButtons';
import UserMenu from '../molecules/UserMenu';
import '../../styles/organisms/Header.css';

function Header({
    variant = 'simple',
    title = 'Tienda De Pociones Y Trinkets Videre',
    subtitle = 'Todo lo que necesitas para tu aventura en un solo lugar',
    logoSrc = '/images/logoVidere192x192.webp',
    avatarSrc = '/images/iconoPerfil192x192.webp',
    onLogout,
}) 
{
    return (
        <header className="header">
            <Container className="header__contenido">
                <BrandBlock title={title} subtitle={subtitle} logoSrc={logoSrc} />
                {variant === 'guest' && <AuthButtons />}
                {variant === 'user' && <UserMenu avatarSrc={avatarSrc} onLogout={onLogout} />}
            </Container>
        </header>
    );
}

export default Header;