import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="product-card border rounded-lg overflow-hidden shadow-lg p-4">
      <img
        src={product["Image Link"]}
        alt={product.Name}
        className="w-full h-48 object-cover"
      />
      <div className="product-details mt-4">
        <h3 className="text-lg font-semibold">{product.Name}</h3>
        <p className="text-gray-600 mt-2">{product.Description}</p>
        <p className="text-gray-800 mt-4 font-bold">
          Price: KSh {product["Regular Price"].toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default ProductCard