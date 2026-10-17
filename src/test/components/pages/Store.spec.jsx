import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Store from '../../../pages/Store';
import products from '../../../data/products';

describe('Store Page', () => {
    beforeEach(() => {
        localStorage.clear();
        spyOn(window, 'alert');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('renderiza el título de la tienda', () => {
        render(<MemoryRouter><Store /></MemoryRouter>);
        expect(screen.getByText('Tienda')).toBeTruthy();
    });

    it('muestra una carta por cada producto', () => {
        render(<MemoryRouter><Store /></MemoryRouter>);
        expect(screen.getAllByText('Ver Producto').length).toBe(products.length);
        expect(screen.getAllByText('Añadir al carrito').length).toBe(products.length);
    });

    it('añade una unidad al carrito desde la primera carta', () => {
        render(<MemoryRouter><Store /></MemoryRouter>);
        fireEvent.click(screen.getAllByText('Añadir al carrito')[0]);
        expect(localStorage.getItem('producto' + products[0].id)).toBe('1');
    });
});