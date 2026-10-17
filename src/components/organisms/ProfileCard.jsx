import React, { useState } from 'react';
import Div from '../atoms/Div';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import '../../styles/organisms/ProfileCard.css';

function ProfileCard() {
    const correoSesion = localStorage.getItem('sesionCorreo');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find((u) => u.correo === correoSesion);

    const [nombreUsuario, setNombreUsuario] = useState(usuario ? usuario.nombreUsuario : 'Sin nombre');
    const [nuevoNombre, setNuevoNombre] = useState('');

    const correo = correoSesion || 'Sin correo';
    const compras = usuario ? usuario.compras : 0;

    const cambiarNombre = () => {
        const nombre = nuevoNombre.trim();
        if (nombre === '') {
            alert('Ingrese un nombre de usuario válido.');
            return;
        }
        const lista = JSON.parse(localStorage.getItem('usuarios')) || [];
        const actualizada = lista.map((u) =>
            u.correo === correoSesion ? { ...u, nombreUsuario: nombre } : u
        );
        localStorage.setItem('usuarios', JSON.stringify(actualizada));
        setNombreUsuario(nombre);
        setNuevoNombre('');
        alert('Nombre de usuario actualizado.');
    };

    return (
        <Div className="profile-card">
            <Image src="/images/iconoPerfil192x192.webp" alt="Foto de perfil" className="profile-card__avatar" />
            <Text variant="h2">{nombreUsuario}</Text>
            <Text>Correo: {correo}</Text>
            <Text>Compras realizadas: {compras}</Text>

            <FormField id="nuevoNombre" label="Cambiar nombre de usuario:" placeholder="Ingrese el nuevo nombre"
                value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
            <Button className="boton-sesion-registro" onClick={cambiarNombre}>Guardar nombre</Button>
        </Div>
    );
}

export default ProfileCard;