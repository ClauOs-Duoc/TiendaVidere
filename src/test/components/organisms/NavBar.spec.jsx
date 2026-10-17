import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../../components/organisms/Navbar';

describe('NavBar Component', () => {
    it('renderiza los enlaces de Tienda y Carrito', () => {
        render(<MemoryRouter><NavBar /></MemoryRouter>);
        expect(screen.getByText('Tienda')).toBeTruthy();
        expect(screen.getByText('Carrito')).toBeTruthy();
    });

    it('el enlace de Tienda apunta a /tienda', () => {
        render(<MemoryRouter><NavBar /></MemoryRouter>);
        expect(screen.getByText('Tienda').getAttribute('href')).toBe('/tienda');
    });

    it('el enlace de Carrito apunta a /cart', () => {
        render(<MemoryRouter><NavBar /></MemoryRouter>);
        expect(screen.getByText('Carrito').getAttribute('href')).toBe('/cart');
    });
});