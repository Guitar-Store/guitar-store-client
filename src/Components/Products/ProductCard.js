import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import "./products.css";

 const ProductCard = ({ imageUrl, brand, model, price, popularity, inStock }) => {
  
  return (
    <Card bg="light" text="black" className="mb-3 product-card"  >
      <Row noGutters className='product-card-row'>
        <Col md={4}>
          <Card.Img src={imageUrl} alt={model} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{brand} - {model}</Card.Title>
            <Card.Text>
              <strong>Price:</strong> £{price}
              <br />
              <strong>Popularity:</strong> {popularity}
              <br />
              <strong>In Stock:</strong> {inStock ? 'Yes' : 'No'}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;