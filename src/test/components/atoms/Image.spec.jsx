import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../components/atoms/Image';

describe('Image Component', () => {
    it('asigna el src correctamente', () => {
        render(<Image src="/images/logoVidere192x192.webp" alt="Logo" />);
        const img = screen.getByAltText('Logo');
        expect(img.getAttribute('src')).toBe('/images/logoVidere192x192.webp');
    });

    it('asigna el texto alternativo', () => {
        render(<Image src="/images/logoVidere192x192.webp" alt="Logotipo de la tienda" />);
        expect(screen.getByAltText('Logotipo de la tienda')).toBeTruthy();
    });

    it('aplica la clase recibida por props', () => {
        render(<Image src="/images/logoVidere192x192.webp" alt="Logo" className="brand__logo" />);
        const img = screen.getByAltText('Logo');
        expect(img.classList.contains('brand__logo')).toBeTrue();
    });
});