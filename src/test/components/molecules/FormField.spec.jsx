import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormField from '../../../components/molecules/FormField';

describe('FormField Component', () => {
    it('asocia la etiqueta con su input', () => {
        render(<FormField id="correo" label="Correo Electrónico:" value="" onChange={() => {}} />);
        expect(screen.getByLabelText('Correo Electrónico:')).toBeTruthy();
    });

    it('usa el tipo y el placeholder recibidos', () => {
        render(<FormField id="clave" label="Contraseña:" type="password" placeholder="Ingrese su contraseña" value="" onChange={() => {}} />);
        const input = screen.getByPlaceholderText('Ingrese su contraseña');
        expect(input.getAttribute('type')).toBe('password');
    });

    it('ejecuta onChange al escribir', () => {
        const spy = jasmine.createSpy('onChange');
        render(<FormField id="nombre" label="Nombre:" value="" onChange={spy} />);
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Ana' } });
        expect(spy).toHaveBeenCalledTimes(1);
    });
});