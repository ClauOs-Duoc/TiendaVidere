import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import ProductCard from '../components/organisms/ProductCard';
import products from '../data/products';
import '../styles/pages/Store.css';

function AdminProducts() {
    return (
        <Container className="store">
            <Text variant="h1">Productos</Text>
            <Row xs={1} sm={2} lg={4} className="store__fila">
                {products.map((product) => (
                    <Col key={product.id} className="store__col">
                        <ProductCard product={product} admin={true} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AdminProducts;