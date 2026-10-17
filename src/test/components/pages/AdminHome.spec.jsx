import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminHome from '../../../pages/AdminHome';

describe('AdminHome Page', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('renderiza el título del panel', () => {
        render(<AdminHome />);
        expect(screen.getByText('Panel de administración')).toBeTruthy();
    });

    it('saluda con el nombre del administrador de la sesión', () => {
        localStorage.setItem('sesionCorreo', 'jefe@tiendavidere.com');
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Jefe', correo: 'jefe@tiendavidere.com', contrasena: 'admin', compras: 0 },
        ]));
        render(<AdminHome />);
        expect(screen.getByText('Bienvenido, Jefe.')).toBeTruthy();
    });

    it('usa Administrador si no hay sesión', () => {
        render(<AdminHome />);
        expect(screen.getByText('Bienvenido, Administrador.')).toBeTruthy();
    });
});