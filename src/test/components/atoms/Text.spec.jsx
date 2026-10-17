import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {
    it('renderiza un párrafo por defecto', () => {
        render(<Text>Hola mundo</Text>);
        const texto = screen.getByText('Hola mundo');
        expect(texto.tagName).toBe('P');
    });

    it('usa la etiqueta indicada en variant', () => {
        render(<Text variant="h1">Título</Text>);
        const titulo = screen.getByText('Título');
        expect(titulo.tagName).toBe('H1');
    });

    it('aplica la clase recibida por props', () => {
        render(<Text className="subtitulo">Subtítulo</Text>);
        const texto = screen.getByText('Subtítulo');
        expect(texto.classList.contains('subtitulo')).toBeTrue();
    });
});