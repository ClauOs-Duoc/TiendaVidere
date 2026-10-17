import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '../../../components/organisms/UserCard';

describe('UserCard Component', () => {
    const cliente = { nombreUsuario: 'Ana', correo: 'ana@gmail.com', compras: 4 };

    it('muestra nombre, correo y compras del usuario', () => {
        render(<UserCard usuario={cliente} esActual={false} />);
        expect(screen.getByText('Ana')).toBeTruthy();
        expect(screen.getByText('ana@gmail.com')).toBeTruthy();
        expect(screen.getByText('Compras: 4')).toBeTruthy();
    });

    it('marca con (tú) al usuario de la sesión actual', () => {
        render(<UserCard usuario={cliente} esActual={true} />);
        expect(screen.getByText('Ana (tú)')).toBeTruthy();
    });

    it('detecta el rol según el correo', () => {
        const admin = { nombreUsuario: 'Jefe', correo: 'jefe@tiendavidere.com', compras: 0 };
        const { rerender } = render(<UserCard usuario={cliente} esActual={false} />);
        expect(screen.getByText('Rol: Cliente')).toBeTruthy();
        rerender(<UserCard usuario={admin} esActual={false} />);
        expect(screen.getByText('Rol: Administrador')).toBeTruthy();
    });
});