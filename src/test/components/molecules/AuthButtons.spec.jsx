import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import AuthButtons from '../../../components/molecules/AuthButtons';

function renderConRutas() {
    return render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<AuthButtons />} />
                <Route path="/login" element={<p>Pagina de login</p>} />
                <Route path="/register" element={<p>Pagina de registro</p>} />
            </Routes>
        </MemoryRouter>
    );
}

describe('AuthButtons Component', () => {
    it('renderiza los dos botones', () => {
        renderConRutas();
        expect(screen.getByText('Iniciar Sesión')).toBeTruthy();
        expect(screen.getByText('Registrar Cuenta')).toBeTruthy();
    });

    it('navega a /login al presionar Iniciar Sesión', () => {
        renderConRutas();
        fireEvent.click(screen.getByText('Iniciar Sesión'));
        expect(screen.getByText('Pagina de login')).toBeTruthy();
    });

    it('navega a /register al presionar Registrar Cuenta', () => {
        renderConRutas();
        fireEvent.click(screen.getByText('Registrar Cuenta'));
        expect(screen.getByText('Pagina de registro')).toBeTruthy();
    });
});