import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import '../../styles/molecules/UserMenu.css';

function UserMenu({ avatarSrc = '/images/iconoPerfil192x192.webp', onLogout }) {
    const navigate = useNavigate();
    return (
        <Div className="user-menu">
            <Dropdown align="end">
                <Dropdown.Toggle as="div" role="button" aria-label="Menú de usuario" className="user-menu__toggle">
                    <Image src={avatarSrc} alt="Foto de perfil" className="user-menu__avatar" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate('/perfil')}>Mi perfil</Dropdown.Item>
                    <Dropdown.Item onClick={onLogout}>Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Div>
    );
}

export default UserMenu;