import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddToCart from '../../../components/molecules/AddToCart';

describe('AddToCart Component', () => {
    it('muestra la cantidad en 1 al iniciar', () => {
        render(<MemoryRouter><AddToCart onAdd={() => {}} /></MemoryRouter>);
        const input = screen.getByLabelText('Cantidad a llevar del producto:');
        expect(input.value).toBe('1');
    });

    it('llama a onAdd con la cantidad ingresada', () => {
        const spy = jasmine.createSpy('onAdd');
        render(<MemoryRouter><AddToCart onAdd={spy} /></MemoryRouter>);
        const input = screen.getByLabelText('Cantidad a llevar del producto:');
        fireEvent.change(input, { target: { value: '5' } });
        fireEvent.click(screen.getByText('AÑADIR AL CARRITO'));
        expect(spy).toHaveBeenCalledWith(5);
    });

    it('no llama a onAdd y avisa si la cantidad no es válida', () => {
        const spy = jasmine.createSpy('onAdd');
        const alertSpy = spyOn(window, 'alert');
        render(<MemoryRouter><AddToCart onAdd={spy} /></MemoryRouter>);
        const input = screen.getByLabelText('Cantidad a llevar del producto:');
        fireEvent.change(input, { target: { value: '0' } });
        fireEvent.click(screen.getByText('AÑADIR AL CARRITO'));
        expect(spy).not.toHaveBeenCalled();
        expect(alertSpy).toHaveBeenCalled();
    });
});