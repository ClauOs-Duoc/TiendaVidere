import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/organisms/Header';
import NavBar from './components/organisms/Navbar';
import AdminNavbar from './components/organisms/AdminNavbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import AdminHome from './pages/AdminHome';
import AdminProducts from './pages/AdminProducts';
import AdminUsers from './pages/AdminUsers';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('sesionActiva');
    localStorage.removeItem('sesionCorreo');
    localStorage.removeItem('esAdmin');
    navigate('/');
  };

  let variant = 'user';
  if (pathname === '/') variant = 'guest';
  else if (pathname === '/login' || pathname === '/register') variant = 'simple';

  const enAdmin = pathname.startsWith('/admin');

  return (
    <>
      <Header variant={variant} onLogout={cerrarSesion} />
      {variant === 'user' && !enAdmin && <NavBar />}
      {variant === 'user' && enAdmin && <AdminNavbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/tienda/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pagar" element={<Payment />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/productos" element={<AdminProducts />} />
          <Route path="/admin/productos/:id" element={<ProductDetail />} />
          <Route path="/admin/usuarios" element={<AdminUsers />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;