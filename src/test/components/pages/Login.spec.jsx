import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../../pages/Login';

describe('Login Page', () => {
    it('renderiza los campos de correo y contraseña', () => {
        render(<MemoryRouter><Login /></MemoryRouter>);
        expect(screen.getByLabelText('Correo Electrónico:')).toBeTruthy();
        expect(screen.getByLabelText('Contraseña:')).toBeTruthy();
    });

    it('renderiza los botones Cancelar y Continuar', () => {
        render(<MemoryRouter><Login /></MemoryRouter>);
        expect(screen.getByText('Cancelar')).toBeTruthy();
        expect(screen.getByText('Continuar')).toBeTruthy();
    });

    it('usa el contenedor con la clase login', () => {
        const { container } = render(<MemoryRouter><Login /></MemoryRouter>);
        expect(container.querySelector('.login')).not.toBeNull();
    });
});