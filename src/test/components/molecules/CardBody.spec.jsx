import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('CardBody Component', () => {
    it('renderiza el título en un h5', () => {
        render(<CardBody title="Poción de Maná" />);
        const titulo = screen.getByText('Poción de Maná');
        expect(titulo.tagName).toBe('H5');
    });

    it('muestra la descripción y el precio cuando existen', () => {
        render(<CardBody title="Poción" description="Restaura maná" price={25} />);
        expect(screen.getByText('Restaura maná')).toBeTruthy();
        expect(screen.getByText('$25')).toBeTruthy();
    });

    it('no muestra descripción ni precio si no se entregan', () => {
        render(<CardBody title="Poción" />);
        expect(screen.queryByText('Restaura maná')).toBeNull();
        expect(screen.queryByText(/\$/)).toBeNull();
    });
});