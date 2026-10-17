import React from 'react';
import { render, screen } from '@testing-library/react';
import BrandBlock from '../../../components/molecules/BrandBlock';

describe('BrandBlock Component', () => {
    it('renderiza el título en un h1', () => {
        render(<BrandBlock title="Tienda Videre" logoSrc="/logoVidere192x192.webp" />);
        const titulo = screen.getByText('Tienda Videre');
        expect(titulo.tagName).toBe('H1');
    });

    it('muestra el subtítulo solo si se entrega', () => {
        const { rerender } = render(<BrandBlock title="Tienda" logoSrc="/logoVidere192x192.webp" />);
        expect(screen.queryByText('Todo para tu aventura')).toBeNull();
        rerender(<BrandBlock title="Tienda" subtitle="Todo para tu aventura" logoSrc="/logoVidere192x192.webp" />);
        expect(screen.getByText('Todo para tu aventura')).toBeTruthy();
    });

    it('asigna el logo recibido', () => {
        render(<BrandBlock title="Tienda" logoSrc="/images/logoVidere192x192.webp" />);
        const logo = screen.getByAltText('Logotipo de la tienda');
        expect(logo.getAttribute('src')).toBe('/images/logoVidere192x192.webp');
    }); 
});