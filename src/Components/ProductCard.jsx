import React, { useState, useContext } from "react";
import { RegistryContext } from "../context/RegistryContext";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";

function ProductCard({
  product,
  hideAddToRegistry = false,
  hideAddToCart = false,
}) {
  const { addToRegistry } = useContext(RegistryContext);
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToRegistry = () => {
    addToRegistry(product);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
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
      <div className="product-card flex flex-col justify-between overflow-hidden p-4 cursor-pointer h-full">
        <div onClick={handleShowModal}>
          <img
            src={product["Image Link"]}
            alt={product.Name}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="product-details mt-4">
            <h3 className="text-lg font-semibold">{product.Name}</h3>
            <p className="text-gray-800 mt-4 font-bold">
              Price: KSh {product["Regular Price"].toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          {!hideAddToRegistry && (
            <button
              onClick={handleAddToRegistry}
              className="bg-doroscolor text-white py-2 px-2 rounded flex-1"
            >
              Add to Registry
            </button>
          )}
          {!hideAddToCart && (
            <button
              onClick={handleAddToCart}
              className="bg-doroscolor text-white py-2 px-2 rounded flex-1"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
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
                className="mt-4 bg-doroscolor text-white py-2 px-4 rounded"
              >
                Add to Registry
              </button>
            )}
            <button
              onClick={() => {
                handleAddToCart();
                handleCloseModal();
              }}
              className="mt-4 bg-doroscolor text-white py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Modal>

      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Item added to registry!
        </div>
      )}
    </>
  );
}

export default ProductCard;
