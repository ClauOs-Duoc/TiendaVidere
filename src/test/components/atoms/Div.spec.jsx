import React from 'react';
import { render, screen } from '@testing-library/react';
import Div from '../../../components/atoms/Div';

describe('Div Component', () => {
    it('renderiza el contenido que recibe', () => {
        render(<Div>Contenido interno</Div>);
        expect(screen.getByText('Contenido interno')).toBeTruthy();
    });

    it('aplica la clase recibida por props', () => {
        render(<Div className="caja">Texto</Div>);
        const div = screen.getByText('Texto');
        expect(div.classList.contains('caja')).toBeTrue();
    });

    it('renderiza una etiqueta div y pasa atributos extra', () => {
        render(<Div id="contenedor">Texto</Div>);
        const div = screen.getByText('Texto');
        expect(div.tagName).toBe('DIV');
        expect(div.getAttribute('id')).toBe('contenedor');
    });
});