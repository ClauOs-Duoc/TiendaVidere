import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/organisms/Footer';

describe('Footer Component', () => {
    it('renderiza el texto de derechos reservados', () => {
        render(<Footer />);
        expect(screen.getByText(/Todos los derechos reservados/)).toBeTruthy();
    });

    it('menciona el nombre de la tienda', () => {
        render(<Footer />);
        expect(screen.getByText(/Tienda De Pociones Y Trinkets Videre/)).toBeTruthy();
    });

    it('usa la etiqueta footer con su clase', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector('footer');
        expect(footer).not.toBeNull();
        expect(footer.classList.contains('footer')).toBeTrue();
    });
});