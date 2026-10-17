import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from '../../../pages/ProductDetail';
import products from '../../../data/products';

function renderDetalle(ruta) {
    return render(
        <MemoryRouter initialEntries={[ruta]}>
            <Routes>
                <Route path="/tienda/:id" element={<ProductDetail />} />
                <Route path="/admin/productos/:id" element={<ProductDetail />} />
                <Route path="/tienda" element={<p>Pagina de tienda</p>} />
            </Routes>
        </MemoryRouter>
    );
}

describe('ProductDetail Page', () => {
    beforeEach(() => {
        localStorage.clear();
        spyOn(window, 'alert');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('muestra el nombre y el precio del producto indicado en la URL', () => {
        renderDetalle('/tienda/1');
        expect(screen.getByText(products[0].name)).toBeTruthy();
        expect(screen.getByText('Precio: ' + products[0].precio + ' Monedas de oro')).toBeTruthy();
    });

    it('avisa si el producto no existe y permite volver', () => {
        renderDetalle('/tienda/999');
        expect(screen.getByText('Producto no encontrado')).toBeTruthy();
        fireEvent.click(screen.getByText('Volver'));
        expect(screen.getByText('Pagina de tienda')).toBeTruthy();
    });

    it('al añadir desde el detalle guarda la cantidad en localStorage', () => {
        renderDetalle('/tienda/1');
        fireEvent.change(screen.getByLabelText('Cantidad a llevar del producto:'), { target: { value: '3' } });
        fireEvent.click(screen.getByText('AÑADIR AL CARRITO'));
        expect(localStorage.getItem('producto1')).toBe('3');
    });

    it('oculta el añadir al carrito en la vista de administrador', () => {
        renderDetalle('/admin/productos/1');
        expect(screen.getByText(products[0].name)).toBeTruthy();
        expect(screen.queryByText('AÑADIR AL CARRITO')).toBeNull();
    });
});