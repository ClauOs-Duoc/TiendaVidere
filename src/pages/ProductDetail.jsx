import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import products from '../data/products';
import Div from '../components/atoms/Div';
import Image from '../components/atoms/Image';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import ProductInfo from '../components/molecules/ProductInfo';
import AddToCart from '../components/molecules/AddToCart';
import '../styles/pages/ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const esAdmin = pathname.startsWith('/admin');
    const rutaVolver = esAdmin ? '/admin/productos' : '/tienda';
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <Container className="product-detail">
                <Text variant="h1">Producto no encontrado</Text>
                <Button className="boton-sesion-registro" onClick={() => navigate(rutaVolver)}>Volver</Button>
            </Container>
        );
    }

    const agregarAlCarrito = (cantidad) => {
        const clave = 'producto' + product.id;
        const cantidadActual = Number(localStorage.getItem(clave)) || 0;
        localStorage.setItem(clave, cantidadActual + cantidad);
        alert('Producto añadido con exito al carrito');
    };

    return (
        <Container className="product-detail">
            <Button className="boton-sesion-registro" onClick={() => navigate(rutaVolver)}>Volver</Button>

            <Div className="product-detail__presentacion">
                <Image src={product.image} alt={product.name} className="product-detail__imagen" />
                <ProductInfo
                    name={product.name}
                    precio={product.precio}
                    especificaciones={product.especificaciones}
                />
                {!esAdmin && <AddToCart key={product.id} onAdd={agregarAlCarrito} />}
            </Div>

            <Div className="product-detail__extra">
                {product.descripcion && <Text>Descripción: {product.descripcion}</Text>}
                {product.advertencia && <Text>Advertencia: {product.advertencia}</Text>}
            </Div>
        </Container>
    );
}

export default ProductDetail;