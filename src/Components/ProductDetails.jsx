import React from 'react'
import ProductCard from './ProductCard';

function ProductDetails({ products }) {
  return (
    <div className="product-details product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.ID} product={product} />
      ))}
    </div>
  );
}

export default ProductDetails;