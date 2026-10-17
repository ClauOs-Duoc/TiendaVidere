import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { Input } from '../atoms/Input';
import '../../styles/molecules/AddToCart.css';

function AddToCart({ onAdd }) {
    const navigate = useNavigate();
    const [cantidad, setCantidad] = useState('1');

    const handleAdd = () => {
        const valor = cantidad.trim();
        const numero = Number(valor);

        if (valor === '' || isNaN(numero) || numero <= 0) {
            alert('Por favor ingresa un número válido.');
            return;
        }

        onAdd(numero);
        setCantidad('1');
    };

    return (
        <Div className="add-to-cart">
            <Text variant="label" htmlFor="cantidad">Cantidad a llevar del producto:</Text>
                <Input
                    id="cantidad"
                    type="number"
                    min="1"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                />
            <Button className="boton-sesion-registro" onClick={handleAdd}>AÑADIR AL CARRITO</Button>
        </Div>
    );
}

export default AddToCart;