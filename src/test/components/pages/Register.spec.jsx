import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from '../../../pages/Register';

describe('Register Page', () => {
    it('renderiza los cuatro campos del formulario', () => {
        render(<MemoryRouter><Register /></MemoryRouter>);
        expect(screen.getByLabelText('Nombre de usuario:')).toBeTruthy();
        expect(screen.getByLabelText('Correo Electrónico:')).toBeTruthy();
        expect(screen.getByLabelText('Contraseña:')).toBeTruthy();
        expect(screen.getByLabelText('Repetir contraseña:')).toBeTruthy();
    });

    it('renderiza los botones Cancelar y Continuar', () => {
        render(<MemoryRouter><Register /></MemoryRouter>);
        expect(screen.getByText('Cancelar')).toBeTruthy();
        expect(screen.getByText('Continuar')).toBeTruthy();
    });

    it('usa el contenedor con la clase register', () => {
        const { container } = render(<MemoryRouter><Register /></MemoryRouter>);
        expect(container.querySelector('.register')).not.toBeNull();
    });
});