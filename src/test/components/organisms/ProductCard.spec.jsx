import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProductCard from '../../../components/organisms/ProductCard';

describe('ProductCard Component', () => {
    const producto = { id: 1, name: 'Poción de Curación', image: '/images/pocionSalud192x192.webp' };

    beforeEach(() => {
        localStorage.clear();
        spyOn(window, 'alert');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('muestra el nombre y la imagen del producto', () => {
        render(<MemoryRouter><ProductCard product={producto} /></MemoryRouter>);
        expect(screen.getByText('Poción de Curación')).toBeTruthy();
        expect(screen.getByAltText('Poción de Curación')).toBeTruthy();
    });

    it('guarda una unidad en localStorage al añadir al carrito', () => {
        render(<MemoryRouter><ProductCard product={producto} /></MemoryRouter>);
        fireEvent.click(screen.getByText('Añadir al carrito'));
        expect(localStorage.getItem('producto1')).toBe('1');
        fireEvent.click(screen.getByText('Añadir al carrito'));
        expect(localStorage.getItem('producto1')).toBe('2');
    });

    it('oculta el botón de añadir cuando es vista de administrador', () => {
        render(<MemoryRouter><ProductCard product={producto} admin={true} /></MemoryRouter>);
        expect(screen.queryByText('Añadir al carrito')).toBeNull();
        expect(screen.getByText('Ver Producto')).toBeTruthy();
    });

    it('navega al detalle del producto al presionar Ver Producto', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<ProductCard product={producto} />} />
                    <Route path="/tienda/1" element={<p>Detalle del producto 1</p>} />
                </Routes>
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Ver Producto'));
        expect(screen.getByText('Detalle del producto 1')).toBeTruthy();
    });
});