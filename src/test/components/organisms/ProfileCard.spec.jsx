import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileCard from '../../../components/organisms/ProfileCard';

describe('ProfileCard Component', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('sesionCorreo', 'ana@gmail.com');
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', compras: 3 },
        ]));
        spyOn(window, 'alert');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('muestra nombre, correo y compras del usuario de la sesión', () => {
        render(<ProfileCard />);
        expect(screen.getByText('Ana')).toBeTruthy();
        expect(screen.getByText('Correo: ana@gmail.com')).toBeTruthy();
        expect(screen.getByText('Compras realizadas: 3')).toBeTruthy();
    });

    it('cambia el nombre de usuario y lo guarda en localStorage', () => {
        render(<ProfileCard />);
        fireEvent.change(screen.getByLabelText('Cambiar nombre de usuario:'), { target: { value: 'Ana María' } });
        fireEvent.click(screen.getByText('Guardar nombre'));
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        expect(usuarios[0].nombreUsuario).toBe('Ana María');
        expect(screen.getByText('Ana María')).toBeTruthy();
    });

    it('avisa si el nuevo nombre está vacío y no lo cambia', () => {
        render(<ProfileCard />);
        fireEvent.click(screen.getByText('Guardar nombre'));
        expect(window.alert).toHaveBeenCalledWith('Ingrese un nombre de usuario válido.');
        expect(screen.getByText('Ana')).toBeTruthy();
    });
});