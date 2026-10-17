import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductInfo from '../../../components/molecules/ProductInfo';

describe('ProductInfo Component', () => {
    it('renderiza el nombre en un h2', () => {
        render(<ProductInfo name="Bola de Cristal" />);
        const nombre = screen.getByText('Bola de Cristal');
        expect(nombre.tagName).toBe('H2');
    });

    it('muestra el precio con la moneda', () => {
        render(<ProductInfo name="Bola de Cristal" precio={25} />);
        expect(screen.getByText('Precio: 25 Monedas de oro')).toBeTruthy();
    });

    it('muestra las especificaciones solo si existen', () => {
        const { rerender } = render(<ProductInfo name="Bola" />);
        expect(screen.queryByText(/Especificaciones/)).toBeNull();
        rerender(<ProductInfo name="Bola" especificaciones="Cristal puro" />);
        expect(screen.getByText('Especificaciones: Cristal puro')).toBeTruthy();
    });
});