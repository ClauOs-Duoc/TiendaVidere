import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import '../../styles/organisms/CartItem.css';

function CartItem({ item, onRemove }) {
    return (
        <Card className="cart-item">
            <Image src={item.image} alt={item.name} className="cart-item__imagen" />
            <Card.Body className="cart-item__cuerpo">
                <Text variant="h5">{item.name}</Text>
                <Text>Cantidad: {item.cantidad}</Text>
                <Text>Subtotal: {item.cantidad * item.precio} Monedas de oro</Text>
                <Button className="boton-sesion-registro" onClick={() => onRemove(item.id)}>
                    Remover Productos
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CartItem;