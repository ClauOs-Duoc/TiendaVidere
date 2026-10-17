import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from '../../../components/organisms/RegisterForm';

function llenarFormulario(nombre, correo, clave1, clave2) {
    fireEvent.change(screen.getByLabelText('Nombre de usuario:'), { target: { value: nombre } });
    fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: correo } });
    fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: clave1 } });
    fireEvent.change(screen.getByLabelText('Repetir contraseña:'), { target: { value: clave2 } });
}

describe('RegisterForm Component', () => {
    beforeEach(() => {
        localStorage.clear();
        spyOn(window, 'alert');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('avisa si las contraseñas no coinciden', () => {
        render(<MemoryRouter><RegisterForm /></MemoryRouter>);
        llenarFormulario('Ana', 'ana@gmail.com', '1234', '9999');
        fireEvent.click(screen.getByText('Continuar'));
        expect(window.alert).toHaveBeenCalledWith('Contraseñas no iguales, vuelva a intentar.');
        expect(localStorage.getItem('usuarios')).toBeNull();
    });

    it('guarda el usuario nuevo en la lista de localStorage', () => {
        render(<MemoryRouter><RegisterForm /></MemoryRouter>);
        llenarFormulario('Ana', 'Ana@Gmail.com', '1234', '1234');
        fireEvent.click(screen.getByText('Continuar'));
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        expect(usuarios.length).toBe(1);
        expect(usuarios[0].nombreUsuario).toBe('Ana');
        expect(usuarios[0].correo).toBe('ana@gmail.com');
        expect(usuarios[0].compras).toBe(0);
    });

    it('no permite registrar un correo que ya existe', () => {
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', compras: 0 },
        ]));
        render(<MemoryRouter><RegisterForm /></MemoryRouter>);
        llenarFormulario('Otra Ana', 'ana@gmail.com', 'abcd', 'abcd');
        fireEvent.click(screen.getByText('Continuar'));
        expect(window.alert).toHaveBeenCalledWith('Ya existe una cuenta con ese correo.');
        expect(JSON.parse(localStorage.getItem('usuarios')).length).toBe(1);
    });
});