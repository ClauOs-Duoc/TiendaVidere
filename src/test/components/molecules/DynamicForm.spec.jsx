import React from 'react';
import { render, screen } from '@testing-library/react';
import DynamicForm from '../../../components/molecules/DynamicForm';

describe('DynamicForm Component', () => {
    it('renderiza un campo por cada elemento de inputs', () => {
        const inputs = [
            { placeholder: 'Nombre' },
            { placeholder: 'Correo' },
        ];
        render(<DynamicForm inputs={inputs} />);
        expect(screen.getByPlaceholderText('Nombre')).toBeTruthy();
        expect(screen.getByPlaceholderText('Correo')).toBeTruthy();
    });

    it('muestra la etiqueta de cada campo', () => {
        const inputs = [{ label: 'Nombre completo', placeholder: 'Nombre' }];
        render(<DynamicForm inputs={inputs} />);
        expect(screen.getByText('Nombre completo')).toBeTruthy();
    });

    it('muestra el mensaje de error en rojo', () => {
        const inputs = [{ placeholder: 'Correo', error: 'Correo inválido' }];
        render(<DynamicForm inputs={inputs} />);
        const error = screen.getByText('Correo inválido');
        expect(error.classList.contains('text-danger')).toBeTrue();
    });
});