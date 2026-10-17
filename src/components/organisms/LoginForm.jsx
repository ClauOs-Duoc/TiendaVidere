import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import '../../styles/organisms/LoginForm.css';

function LoginForm() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const iniciarSesion = () => {
        const correoLimpio = correo.trim().toLowerCase();
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find((u) => u.correo === correoLimpio);

        if (!usuario) {
            alert('Correo incorrecto o sin cuenta.');
            return;
        }
        if (usuario.contrasena !== contrasena) {
            alert('Contraseña incorrecta, vuelva a intentar.');
            return;
        }

        const esAdmin = correoLimpio.endsWith('@tiendavidere.com');
        localStorage.setItem('sesionActiva', 'true');
        localStorage.setItem('sesionCorreo', correoLimpio);
        localStorage.setItem('esAdmin', esAdmin);
        alert('Sesion iniciada con exito.');

        if (esAdmin) {
            navigate('/admin');
        } else {
            navigate('/tienda');
        }
    };

    return (
        <Div className="login-form">
            <FormField id="correoSesion" label="Correo Electrónico:" type="email" placeholder="Ingrese su correo"
                value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <FormField id="contrasenaSesion" label="Contraseña:" type="password" placeholder="Ingrese su contraseña"
                value={contrasena} onChange={(e) => setContrasena(e.target.value)} />

            <Div className="login-form__botones">
                <Button className="boton-sesion-registro" onClick={() => navigate('/')}>Cancelar</Button>
                <Button className="boton-sesion-registro" onClick={iniciarSesion}>Continuar</Button>
            </Div>
        </Div>
    );
}

export default LoginForm;