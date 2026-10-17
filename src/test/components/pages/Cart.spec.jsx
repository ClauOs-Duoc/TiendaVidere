import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Cart from '../../../pages/Cart';
import products from '../../../data/products';

function renderCart() {
    return render(
        <MemoryRouter initialEntries={['/cart']}>
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/tienda" element={<p>Pagina de tienda</p>} />
            </Routes>
        </MemoryRouter>
    );
}

describe('Cart Page', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('muestra el mensaje de carrito vacío y vuelve a la tienda', () => {
        renderCart();
        expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
        fireEvent.click(screen.getByText('Ir a la tienda'));
        expect(screen.getByText('Pagina de tienda')).toBeTruthy();
    });

    it('muestra solo los productos con cantidad mayor a 0 y calcula el total', () => {
        localStorage.setItem('producto1', '2');
        localStorage.setItem('producto2', '1');
        renderCart();
        const total = products[0].precio * 2 + products[1].precio * 1;
        expect(screen.getByText(products[0].name)).toBeTruthy();
        expect(screen.getByText(products[1].name)).toBeTruthy();
        expect(screen.queryByText(products[2].name)).toBeNull();
        expect(screen.getByText('Total: ' + total + ' Monedas de oro')).toBeTruthy();
    });

    it('quita un producto del carrito y de localStorage', () => {
        localStorage.setItem('producto1', '3');
        renderCart();
        fireEvent.click(screen.getByText('Remover Productos'));
        expect(localStorage.getItem('producto1')).toBeNull();
        expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
    });

    it('vacía todo el carrito con Vaciar Carrito', () => {
        localStorage.setItem('producto1', '1');
        localStorage.setItem('producto2', '4');
        renderCart();
        fireEvent.click(screen.getByText('Vaciar Carrito'));
        expect(localStorage.getItem('producto1')).toBeNull();
        expect(localStorage.getItem('producto2')).toBeNull();
        expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
    });
});