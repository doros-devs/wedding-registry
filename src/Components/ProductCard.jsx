import React, { useState, useContext } from "react";
import { RegistryContext } from "../context/RegistryContext";
import Modal from "./Modal";

function ProductCard({ product }) {
  const { addToRegistry } = useContext(RegistryContext);
  const [showModal, setShowModal] = useState(false);

  const handleAddToRegistry = () => {
    addToRegistry(product);
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
        <button
          onClick={handleAddToRegistry}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add to Registry
        </button>
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
            <button
              onClick={() => {
                handleAddToRegistry();
                handleCloseModal();
              }}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add to Registry
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ProductCard;
