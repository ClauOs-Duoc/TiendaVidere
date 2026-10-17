import React from 'react';
import { useNavigate } from 'react-router-dom';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import '../../styles/molecules/AuthButtons.css';

function AuthButtons() {
    const navigate = useNavigate();
    return (
        <Div className="auth-buttons">
            <Button className="boton-header" onClick={() => navigate('/login')}>Iniciar Sesión</Button>
            <Button className="boton-header" onClick={() => navigate('/register')}>Registrar Cuenta</Button>
        </Div>
    );
}

export default AuthButtons;