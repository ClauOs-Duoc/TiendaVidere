import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminProducts from '../../../pages/AdminProducts';
import products from '../../../data/products';

describe('AdminProducts Page', () => {
    it('renderiza el título de la página', () => {
        render(<MemoryRouter><AdminProducts /></MemoryRouter>);
        expect(screen.getByText('Productos')).toBeTruthy();
    });

    it('muestra una carta por cada producto', () => {
        render(<MemoryRouter><AdminProducts /></MemoryRouter>);
        expect(screen.getAllByText('Ver Producto').length).toBe(products.length);
        expect(screen.getByText(products[0].name)).toBeTruthy();
    });

    it('no muestra botones de añadir al carrito', () => {
        render(<MemoryRouter><AdminProducts /></MemoryRouter>);
        expect(screen.queryByText('Añadir al carrito')).toBeNull();
    });
});