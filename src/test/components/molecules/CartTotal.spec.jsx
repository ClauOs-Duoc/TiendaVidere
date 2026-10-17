import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartTotal from '../../../components/molecules/CartTotal';

describe('CartTotal Component', () => {
    it('muestra el total recibido', () => {
        render(<CartTotal total={50} onClear={() => {}} onBuy={() => {}} />);
        expect(screen.getByText('Total: 50 Monedas de oro')).toBeTruthy();
    });

    it('llama a onClear al presionar Vaciar Carrito', () => {
        const spy = jasmine.createSpy('onClear');
        render(<CartTotal total={10} onClear={spy} onBuy={() => {}} />);
        fireEvent.click(screen.getByText('Vaciar Carrito'));
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('llama a onBuy al presionar Comprar Productos', () => {
        const spy = jasmine.createSpy('onBuy');
        render(<CartTotal total={10} onClear={() => {}} onBuy={spy} />);
        fireEvent.click(screen.getByText('Comprar Productos'));
        expect(spy).toHaveBeenCalledTimes(1);
    });
});