import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { RegistryContext } from "../context/RegistryContext";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToRegistry } = useContext(RegistryContext);
  const serverUrl = import.meta.env.VITE_DB_JSON_SERVER;

  useEffect(() => {
    fetch(`${serverUrl}/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  const handleAddToRegistry = () => {
    addToRegistry(product);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <SecondNavbar />
      <div className="product-detail-page p-8">
        <div className="product-card border rounded-lg overflow-hidden shadow-lg p-4 max-w-md mx-auto">
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
            <button
              onClick={handleAddToRegistry}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add to Registry
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
