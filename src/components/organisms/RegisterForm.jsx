import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import '../../styles/organisms/RegisterForm.css';

function RegisterForm() {
    const navigate = useNavigate();
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena1, setContrasena1] = useState('');
    const [contrasena2, setContrasena2] = useState('');

    const registrarCuenta = () => {
        const nombre = nombreUsuario.trim();
        const correoLimpio = correo.trim().toLowerCase();

        if (nombre === '' || correoLimpio === '') {
            alert('Ingrese un nombre de usuario y un correo.');
            return;
        }
        if (contrasena1 !== contrasena2) {
            alert('Contraseñas no iguales, vuelva a intentar.');
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        if (usuarios.some((u) => u.correo === correoLimpio)) {
            alert('Ya existe una cuenta con ese correo.');
            return;
        }

        usuarios.push({
            nombreUsuario: nombre,
            correo: correoLimpio,
            contrasena: contrasena1,
            compras: 0,
        });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Cuenta creada con exito.');
        navigate('/');
    };

    return (
        <Div className="register-form">
            <FormField id="nombreUsuario" label="Nombre de usuario:" placeholder="Ingrese su nombre de usuario"
                value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
            <FormField id="correo" label="Correo Electrónico:" type="email" placeholder="Ingrese su correo"
                value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <FormField id="contrasena1" label="Contraseña:" type="password" placeholder="Ingrese su contraseña"
                value={contrasena1} onChange={(e) => setContrasena1(e.target.value)} />
            <FormField id="contrasena2" label="Repetir contraseña:" type="password" placeholder="Vuelva a ingresar su contraseña"
                value={contrasena2} onChange={(e) => setContrasena2(e.target.value)} />

            <Div className="register-form__botones">
                <Button className="boton-sesion-registro" onClick={() => navigate('/')}>Cancelar</Button>
                <Button className="boton-sesion-registro" onClick={registrarCuenta}>Continuar</Button>
            </Div>
        </Div>
    );
}

export default RegisterForm;