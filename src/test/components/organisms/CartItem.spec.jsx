import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../../../components/organisms/CartItem';

describe('CartItem Component', () => {
    const item = { id: 3, name: 'Bola Azul', image: '/images/bolaAzul.webp', cantidad: 2, precio: 10 };

    it('muestra el nombre y la imagen del producto', () => {
        render(<CartItem item={item} onRemove={() => {}} />);
        expect(screen.getByText('Bola Azul')).toBeTruthy();
        expect(screen.getByAltText('Bola Azul').getAttribute('src')).toBe('/images/bolaAzul.webp');
    });

    it('muestra la cantidad y calcula el subtotal', () => {
        render(<CartItem item={item} onRemove={() => {}} />);
        expect(screen.getByText('Cantidad: 2')).toBeTruthy();
        expect(screen.getByText('Subtotal: 20 Monedas de oro')).toBeTruthy();
    });

    it('llama a onRemove con el id del producto', () => {
        const spy = jasmine.createSpy('onRemove');
        render(<CartItem item={item} onRemove={spy} />);
        fireEvent.click(screen.getByText('Remover Productos'));
        expect(spy).toHaveBeenCalledWith(3);
    });
});