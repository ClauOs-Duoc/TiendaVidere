import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../components/atoms/Input';

describe('Input Component', () => {
    it('renderiza con el placeholder indicado', () => {
        render(<Input placeholder="Ingrese su correo" />);
        expect(screen.getByPlaceholderText('Ingrese su correo')).toBeTruthy();
    });

    it('usa el tipo recibido por props', () => {
        render(<Input type="password" placeholder="Clave" />);
        const input = screen.getByPlaceholderText('Clave');
        expect(input.getAttribute('type')).toBe('password');
    });

    it('ejecuta onChange al escribir', () => {
        const spy = jasmine.createSpy('onChange');
        render(<Input placeholder="Nombre" onChange={spy} />);
        fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'Ana' } });
        expect(spy).toHaveBeenCalledTimes(1);
    });
});