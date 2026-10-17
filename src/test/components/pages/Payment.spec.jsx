import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Payment from '../../../pages/Payment';

describe('Payment Page', () => {
    it('renderiza los cuatro campos de la tarjeta', () => {
        render(<MemoryRouter><Payment /></MemoryRouter>);
        expect(screen.getByLabelText('Número de la Tarjeta:')).toBeTruthy();
        expect(screen.getByLabelText('MM/YY de la tarjeta:')).toBeTruthy();
        expect(screen.getByLabelText('CVV de la Tarjeta:')).toBeTruthy();
        expect(screen.getByLabelText('Contraseña de la Tarjeta:')).toBeTruthy();
    });

    it('renderiza los botones Cancelar y Proceder', () => {
        render(<MemoryRouter><Payment /></MemoryRouter>);
        expect(screen.getByText('Cancelar')).toBeTruthy();
        expect(screen.getByText('Proceder')).toBeTruthy();
    });

    it('usa el contenedor con la clase payment', () => {
        const { container } = render(<MemoryRouter><Payment /></MemoryRouter>);
        expect(container.querySelector('.payment')).not.toBeNull();
    });
});