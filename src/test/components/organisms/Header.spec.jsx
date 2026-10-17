import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../../components/organisms/Header';

describe('Header Component', () => {
    it('muestra el título por defecto de la tienda', () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        expect(screen.getByText('Tienda De Pociones Y Trinkets Videre')).toBeTruthy();
    });

    it('en la variante guest muestra los botones de sesión y registro', () => {
        render(<MemoryRouter><Header variant="guest" /></MemoryRouter>);
        expect(screen.getByText('Iniciar Sesión')).toBeTruthy();
        expect(screen.getByText('Registrar Cuenta')).toBeTruthy();
    });

    it('en la variante user muestra el menú de usuario y no los botones de sesión', () => {
        render(<MemoryRouter><Header variant="user" /></MemoryRouter>);
        expect(screen.getByLabelText('Menú de usuario')).toBeTruthy();
        expect(screen.queryByText('Iniciar Sesión')).toBeNull();
    });

    it('en la variante simple no muestra botones ni menú', () => {
        render(<MemoryRouter><Header variant="simple" /></MemoryRouter>);
        expect(screen.queryByText('Iniciar Sesión')).toBeNull();
        expect(screen.queryByLabelText('Menú de usuario')).toBeNull();
    });
});