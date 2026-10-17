import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Component', () => {
    it('renderiza el botón con su texto', () => {
        render(<Button>Haz click</Button>);
        expect(screen.getByText('Haz click')).toBeTruthy();
    });

    it('aplica la variante de Bootstrap', () => {
        render(<Button variant="danger">Eliminar</Button>);
        const button = screen.getByText('Eliminar');
        expect(button.classList.contains('btn-danger')).toBeTrue();
    });

    it('ejecuta onClick al hacer click', () => {
        const spy = jasmine.createSpy('onClick');
        render(<Button onClick={spy}>Enviar</Button>);
        fireEvent.click(screen.getByText('Enviar'));
        expect(spy).toHaveBeenCalledTimes(1);
    });
});