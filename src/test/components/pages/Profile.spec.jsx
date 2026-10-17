import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../../../pages/Profile';

describe('Profile Page', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('sesionCorreo', 'ana@gmail.com');
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', compras: 5 },
        ]));
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('muestra el nombre del usuario de la sesión', () => {
        render(<Profile />);
        expect(screen.getByText('Ana')).toBeTruthy();
    });

    it('muestra el correo y las compras realizadas', () => {
        render(<Profile />);
        expect(screen.getByText('Correo: ana@gmail.com')).toBeTruthy();
        expect(screen.getByText('Compras realizadas: 5')).toBeTruthy();
    });

    it('usa el contenedor con la clase profile', () => {
        const { container } = render(<Profile />);
        expect(container.querySelector('.profile')).not.toBeNull();
    });
});