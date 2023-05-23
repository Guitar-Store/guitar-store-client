import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./products.css";
import axios from "axios";

const ProductsList = () => {
  const SERVER = process.env.REACT_APP_SERVER_URL;
  const ROUTE_PRODUCTS = process.env.REACT_APP_ROUTES_PRODUCTS;

  
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`${SERVER}${ROUTE_PRODUCTS}/`);
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, [ROUTE_PRODUCTS, SERVER]);

  const exampleProducts = [
    {
      imageUrl:
        "https://images.guitarguitar.co.uk/cdn/large/150/190319340844008f.jpg?h=190&w=120&mode=crop&bg=ffffff&quality=70&anchor=bottomcenter",
      brand: "Fender",
      model: "Stratocaster",
      price: 1200,
      popularity: 9,
      inStock: true,
      reviewsNum: 25,
      id: 1,
    },
    {
      imageUrl:
        "https://images.guitarguitar.co.uk/cdn/large/160/191216352625008f.jpg?h=190&w=120&mode=crop&bg=ffffff&quality=70&anchor=bottomcenter",
      brand: "Gibson",
      model: "Les Paul",
      price: 1500,
      popularity: 8,
      inStock: false,
      reviewsNum: 25,
      id: 2,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageUrl={product.image}
          brand={product.brand}
          model={product.model}
          price={product.price}
          popularity={product.popularity}
          inStock={product.inStock}
          reviewsNum={product.reviewsNum}
          id={product._id}
          offer={product.offer}
        />
      ))}
    </div>
  );
};

export default ProductsList;
