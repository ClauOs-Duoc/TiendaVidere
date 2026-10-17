import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Div from '../atoms/Div';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import '../../styles/organisms/ProductCard.css';

function ProductCard({ product, admin = false }) {
    const navigate = useNavigate();

    const handleAdd = () => {
        const clave = 'producto' + product.id;
        const cantidadActual = Number(localStorage.getItem(clave)) || 0;
        localStorage.setItem(clave, cantidadActual + 1);
        alert('Producto añadido con exito');
    };

    const verProducto = () => {
        if (admin) {
            navigate('/admin/productos/' + product.id);
        } else {
            navigate('/tienda/' + product.id);
        }
    };

    return (
        <Card className="product-card">
            <Image src={product.image} alt={product.name} className="product-card__imagen" />
            <Card.Body className="product-card__cuerpo">
                <CardBody title={product.name} description={product.description} price={product.price} />
                <Div className="product-card__botones">
                    {!admin && (
                        <Button className="boton-sesion-registro" onClick={handleAdd}>
                            Añadir al carrito
                        </Button>
                    )}
                    <Button className="boton-sesion-registro" onClick={verProducto}>
                        Ver Producto
                    </Button>
                </Div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;