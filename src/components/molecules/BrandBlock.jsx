import React from 'react';
import Div from '../atoms/Div';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import '../../styles/molecules/BrandBlock.css';

function BrandBlock({ title, subtitle, logoSrc }) {
    return (
        <Div className="brand">
            <Image src={logoSrc} alt="Logotipo de la tienda" className="brand__logo" />
            <Div>
                <Text variant="h1" className="brand__title">{title}</Text>
                {subtitle && <Text className="brand__subtitle">{subtitle}</Text>}
            </Div>
        </Div>
    );
}

export default BrandBlock;