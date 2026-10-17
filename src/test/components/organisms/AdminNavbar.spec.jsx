import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNavbar from '../../../components/organisms/AdminNavbar';

describe('AdminNavbar Component', () => {
    it('renderiza los tres enlaces del administrador', () => {
        render(<MemoryRouter><AdminNavbar /></MemoryRouter>);
        expect(screen.getByText('Inicio')).toBeTruthy();
        expect(screen.getByText('Productos')).toBeTruthy();
        expect(screen.getByText('Usuarios')).toBeTruthy();
    });

    it('el enlace de productos apunta a /admin/productos', () => {
        render(<MemoryRouter><AdminNavbar /></MemoryRouter>);
        const enlace = screen.getByText('Productos');
        expect(enlace.getAttribute('href')).toBe('/admin/productos');
    });

    it('el enlace de usuarios apunta a /admin/usuarios', () => {
        render(<MemoryRouter><AdminNavbar /></MemoryRouter>);
        const enlace = screen.getByText('Usuarios');
        expect(enlace.getAttribute('href')).toBe('/admin/usuarios');
    });
});