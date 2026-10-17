import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PaymentForm from '../../../components/organisms/PaymentForm';

function llenarFormulario(numero, venc, cvv, clave) {
    fireEvent.change(screen.getByLabelText('Número de la Tarjeta:'), { target: { value: numero } });
    fireEvent.change(screen.getByLabelText('MM/YY de la tarjeta:'), { target: { value: venc } });
    fireEvent.change(screen.getByLabelText('CVV de la Tarjeta:'), { target: { value: cvv } });
    fireEvent.change(screen.getByLabelText('Contraseña de la Tarjeta:'), { target: { value: clave } });
}

describe('PaymentForm Component', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('sesionCorreo', 'ana@gmail.com');
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', compras: 0 },
        ]));
        localStorage.setItem('producto1', '2');
        spyOn(window, 'alert');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('avisa si hay campos vacíos', () => {
        render(<MemoryRouter><PaymentForm /></MemoryRouter>);
        fireEvent.click(screen.getByText('Proceder'));
        expect(window.alert).toHaveBeenCalledWith('No puede haber campos vacios.');
    });

    it('rechaza datos de pago incorrectos y conserva el carrito', () => {
        render(<MemoryRouter><PaymentForm /></MemoryRouter>);
        llenarFormulario('1111 2222 3333 4444', '12/26', '123', 'clave123');
        fireEvent.click(screen.getByText('Proceder'));
        expect(window.alert).toHaveBeenCalledWith('Datos de pago incorrectos. Intenta nuevamente.');
        expect(localStorage.getItem('producto1')).toBe('2');
    });

    it('con datos correctos vacía el carrito y suma una compra', () => {
        render(<MemoryRouter><PaymentForm /></MemoryRouter>);
        llenarFormulario('1234 5678 9012 3456', '12/26', '123', 'clave123');
        fireEvent.click(screen.getByText('Proceder'));
        expect(localStorage.getItem('producto1')).toBeNull();
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        expect(usuarios[0].compras).toBe(1);
    });
});