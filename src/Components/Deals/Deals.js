import React, { useEffect, useState } from 'react';
import ProductCard from '../Products/ProductCard';
import './deals.css';
import axios from 'axios';

const Deals = () => {
  const SERVER = process.env.REACT_APP_SERVER_URL;
  const ROUTE_DEALS = process.env.REACT_APP_ROUTES_DEALS;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${SERVER}${ROUTE_DEALS}/`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [ROUTE_DEALS, SERVER]);

  return (
    <div className='deals-list'>
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

export default Deals;
