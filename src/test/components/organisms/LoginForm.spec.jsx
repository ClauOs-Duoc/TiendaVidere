import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LoginForm from '../../../components/organisms/LoginForm';

function renderLogin() {
    return render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/tienda" element={<p>Pagina de tienda</p>} />
                <Route path="/admin" element={<p>Panel de administracion</p>} />
            </Routes>
        </MemoryRouter>
    );
}

function llenarFormulario(correo, clave) {
    fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: correo } });
    fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: clave } });
}

describe('LoginForm Component', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('usuarios', JSON.stringify([
            { nombreUsuario: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', compras: 0 },
            { nombreUsuario: 'Jefe', correo: 'jefe@tiendavidere.com', contrasena: 'admin', compras: 0 },
        ]));
        spyOn(window, 'alert');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('avisa si el correo no tiene cuenta', () => {
        renderLogin();
        llenarFormulario('otro@gmail.com', '1234');
        fireEvent.click(screen.getByText('Continuar'));
        expect(window.alert).toHaveBeenCalledWith('Correo incorrecto o sin cuenta.');
    });

    it('avisa si la contraseña es incorrecta', () => {
        renderLogin();
        llenarFormulario('ana@gmail.com', 'mala');
        fireEvent.click(screen.getByText('Continuar'));
        expect(window.alert).toHaveBeenCalledWith('Contraseña incorrecta, vuelva a intentar.');
        expect(localStorage.getItem('sesionActiva')).toBeNull();
    });

    it('inicia sesión como cliente y navega a la tienda', () => {
        renderLogin();
        llenarFormulario('ana@gmail.com', '1234');
        fireEvent.click(screen.getByText('Continuar'));
        expect(localStorage.getItem('sesionActiva')).toBe('true');
        expect(localStorage.getItem('esAdmin')).toBe('false');
        expect(screen.getByText('Pagina de tienda')).toBeTruthy();
    });

    it('inicia sesión como administrador y navega a /admin', () => {
        renderLogin();
        llenarFormulario('jefe@tiendavidere.com', 'admin');
        fireEvent.click(screen.getByText('Continuar'));
        expect(localStorage.getItem('esAdmin')).toBe('true');
        expect(screen.getByText('Panel de administracion')).toBeTruthy();
    });
});