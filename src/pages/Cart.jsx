import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import CartItem from '../components/organisms/CartItem';
import CartTotal from '../components/molecules/CartTotal';
import '../styles/pages/Cart.css';

function leerCarrito() {
    return products
        .map((p) => ({
            ...p,
            cantidad: Number(localStorage.getItem(`producto${p.id}`)) || 0,
    })).filter((p) => p.cantidad > 0);
}

function Cart() {
    const navigate = useNavigate();
    const [items, setItems] = useState(leerCarrito);
    const total = items.reduce((suma, p) => suma + p.cantidad * p.precio, 0);

    const removerProducto = (id) => {
        localStorage.removeItem(`producto${id}`);
        setItems(leerCarrito());
    };

    const vaciarCarrito = () => {
        products.forEach((p) => localStorage.removeItem(`producto${p.id}`));
        setItems([]);
    };

    return (
        <Container className="cart">
            <Text variant="h1">Carrito</Text>

            {items.length === 0 ? (
                <>
                    <Text>Tu carrito está vacío.</Text>
                    <Button className="boton-sesion-registro" onClick={() => navigate('/tienda')}>
                        Ir a la tienda
                    </Button>
                </>
            ) : (
                <>
                    <Row xs={1} sm={2} lg={4} className="cart__fila">
                        {items.map((item) => (
                            <Col key={item.id} className="cart__col">
                                <CartItem item={item} onRemove={removerProducto} />
                            </Col>
                        ))}
                    </Row>
                    <CartTotal total={total} onClear={vaciarCarrito} onBuy={() => navigate('/pagar')} />
                </>
            )}
        </Container>
    );
}

export default Cart;