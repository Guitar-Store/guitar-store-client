import React from 'react';
import ProductCard from './ProductCard';


const ProductsList = () => {
    const exampleProducts = [
    {
    imageUrl: 'https://images.guitarguitar.co.uk/cdn/large/150/190319340844008f.jpg?h=190&w=120&mode=crop&bg=ffffff&quality=70&anchor=bottomcenter',
    brand: 'Fender',
    model: 'Stratocaster',
    price: 1200,
    popularity: 9,
    inStock: true,
    },
    {
    imageUrl: 'https://images.guitarguitar.co.uk/cdn/large/160/191216352625008f.jpg?h=190&w=120&mode=crop&bg=ffffff&quality=70&anchor=bottomcenter',
    brand: 'Gibson',
    model: 'Les Paul',
    price: 1500,
    popularity: 8,
    inStock: false,
    },
    ];
    
    return (
    <div>
    <h2>Products</h2>
    {exampleProducts.map((product, index) => (
    <ProductCard
           key={index}
           imageUrl={product.imageUrl}
           brand={product.brand}
           model={product.model}
           price={product.price}
           popularity={product.popularity}
           inStock={product.inStock}
         />
    ))}
    </div>
    );
    };
    
    export default ProductsList;