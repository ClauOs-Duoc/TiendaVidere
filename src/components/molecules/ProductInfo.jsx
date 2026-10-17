import React from 'react';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import '../../styles/molecules/ProductInfo.css';

function ProductInfo({ name, precio, especificaciones }) {
    return (
        <Div className="product-info">
            <Text variant="h2" className="product-info__texto">{name}</Text>
            {precio && <Text className="product-info__texto">Precio: {precio} Monedas de oro</Text>}
            {especificaciones && (
                <Text className="product-info__texto">Especificaciones: {especificaciones}</Text>
            )}
        </Div>
    );
}

export default ProductInfo;