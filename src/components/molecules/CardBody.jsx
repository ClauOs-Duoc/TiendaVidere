import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description, price }) {
  return (
    <>
      <Text variant="h5">{title}</Text>
      {description && <Text variant="p">{description}</Text>}
      {price && <Text variant="span">${price}</Text>}
    </>
  );
}

export default CardBody;