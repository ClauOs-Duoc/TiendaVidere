import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import UserMenu from '../../../components/molecules/UserMenu';

describe('UserMenu Component', () => {
    it('muestra la foto de perfil por defecto', () => {
        render(<MemoryRouter><UserMenu /></MemoryRouter>);
        const foto = screen.getByAltText('Foto de perfil');
        expect(foto.getAttribute('src')).toBe('/images/iconoPerfil192x192.webp');
    });

    it('llama a onLogout al presionar Cerrar sesión', () => {
        const spy = jasmine.createSpy('onLogout');
        render(<MemoryRouter><UserMenu onLogout={spy} /></MemoryRouter>);
        fireEvent.click(screen.getByLabelText('Menú de usuario'));
        fireEvent.click(screen.getByText('Cerrar sesión'));
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('navega a /perfil al presionar Mi perfil', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<UserMenu />} />
                    <Route path="/perfil" element={<p>Pagina de perfil</p>} />
                </Routes>
            </MemoryRouter>
        );
        fireEvent.click(screen.getByLabelText('Menú de usuario'));
        fireEvent.click(screen.getByText('Mi perfil'));
        expect(screen.getByText('Pagina de perfil')).toBeTruthy();
    });
});