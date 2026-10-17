import React from 'react';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import '../../styles/molecules/CartTotal.css';

function CartTotal({ total, onClear, onBuy }) {
    return (
        <Div className="cart-total">
            <Text variant="h2">Total: {total} Monedas de oro</Text>
            <Div className="cart-total__botones">
                <Button className="boton-sesion-registro" onClick={onClear}>Vaciar Carrito</Button>
                <Button className="boton-sesion-registro" onClick={onBuy}>Comprar Productos</Button>
            </Div>
        </Div>
    );
}

export default CartTotal;