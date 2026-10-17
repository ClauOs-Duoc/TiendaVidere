import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminUsers from '../../../pages/AdminUsers';

describe('AdminUsers Page', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('avisa si no hay usuarios registrados', () => {
        render(<AdminUsers />);
        expect(screen.getByText('Usuarios')).toBeTruthy();
        expect(screen.getByText('No hay usuarios registrados.')).toBeTruthy();
    });

    it('muestra una carta por cada usuario', () => {
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', compras: 2 },
            { nombreUsuario: 'Luis', correo: 'luis@gmail.com', contrasena: '5678', compras: 0 },
        ]));
        render(<AdminUsers />);
        expect(screen.getByText('Ana')).toBeTruthy();
        expect(screen.getByText('Luis')).toBeTruthy();
        expect(screen.queryByText('No hay usuarios registrados.')).toBeNull();
    });

    it('marca con (tú) al usuario de la sesión', () => {
        localStorage.setItem('sesionCorreo', 'jefe@tiendavidere.com');
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Jefe', correo: 'jefe@tiendavidere.com', contrasena: 'admin', compras: 0 },
            { nombreUsuario: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', compras: 0 },
        ]));
        render(<AdminUsers />);
        expect(screen.getByText('Jefe (tú)')).toBeTruthy();
        expect(screen.getByText('Ana')).toBeTruthy();
    });
});