import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./products.css";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ imageUrl, brand, model, price, reviewsNum, popularity, inStock }) => {
  const addToCart = () => {
    console.log("Added to cart");
  };

  return (
    <Card bg="light" text="black" className="mb-3 product-card">
      <Row noGutters className="product-card-row">
        <Col md={4} sm={4} xs={4}>
          <Card.Img src={imageUrl} alt={model} />
        </Col>
        <Col md={8} sm={8} xs={8}>
          <Card.Body className="product-card-body">
            <Card.Title>
              {brand} - {model}
            </Card.Title>
            <Card.Text>
              <strong>Price:</strong> £{price}
              <br />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <StarRating rating={4} />
                <span style={{ marginLeft: "5px" }}>({reviewsNum})</span>
              </div>
              <br />
              <strong>In Stock:</strong> {inStock ? "Yes" : "No"}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Button className="product-card-button" variant="primary" onClick={addToCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    </Card>
  );
};

export default ProductCard;
