import React, { useState, useContext } from "react";
import { RegistryContext } from "../context/RegistryContext";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";

function ProductCard({ product, hideAddToRegistry = false, hideAddToCart = false }) {
  const { addToRegistry } = useContext(RegistryContext);
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleAddToRegistry = () => {
    addToRegistry(product);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="product-card border rounded-lg overflow-hidden shadow-lg p-4 cursor-pointer">
        <img
          src={product["Image Link"]}
          alt={product.Name}
          className="w-full h-48 object-cover"
          onClick={handleShowModal}
        />
        <div className="product-details mt-4">
          <h3 className="text-lg font-semibold">{product.Name}</h3>
          <p className="text-gray-800 mt-4 font-bold">
            Price: KSh {product["Regular Price"].toLocaleString()}
          </p>
        </div>
        <div className="flex space-x-4">
          {!hideAddToRegistry && (
            <button
              onClick={handleAddToRegistry}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add to Registry
            </button>
          )}{!hideAddToCart &&(<button
            onClick={handleAddToCart}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>)}
          
        </div>
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <div className="product-details-modal p-4">
            <img
              src={product["Image Link"]}
              alt={product.Name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{product.Name}</h3>
            <p className="text-gray-600 mt-2">{product.Description}</p>
            <p className="text-gray-800 mt-4 font-bold">
              Price: KSh {product["Regular Price"].toLocaleString()}
            </p>
            <div className="flex space-x-4">
              {!hideAddToRegistry && (
                <button
                  onClick={() => {
                    handleAddToRegistry();
                    handleCloseModal();
                  }}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Add to Registry
                </button>
              )}
              <button
                onClick={() => {
                  handleAddToCart();
                  handleCloseModal();
                }}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ProductCard;
