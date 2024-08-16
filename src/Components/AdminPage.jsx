import React, { useEffect, useState } from "react";
import Modal from "./Modal"; // Importing the existing Modal component

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    ID: "",
    Categories: "",
    Name: "",
    Description: "",
    "Image Link": "",
    "Regular Price": "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const serverUrl = import.meta.env.VITE_DB_JSON_SERVER;

  useEffect(() => {
    fetch(`${serverUrl}/products`)
      .then((res) => res.json())
      .then((data) => {
        const cleanedData = data.map((product) => {
          let cleanedProduct = {};
          for (let key in product) {
            const cleanedKey = key.trim(); // Remove leading/trailing spaces from keys
            cleanedProduct[cleanedKey] = product[key];
          }
          return cleanedProduct;
        });
        setProducts(cleanedData);
      });
  }, [serverUrl]);

  const handleInputChange = (e) => {
    setCurrentProduct({
      ...currentProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (isEditing) {
      fetch(`${serverUrl}/products/${currentProduct.ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentProduct),
      })
        .then((res) => res.json())
        .then((updatedProduct) => {
          setProducts(
            products.map((product) =>
              product.ID === updatedProduct.ID ? updatedProduct : product
            )
          );
          closeModal();
        });
    } else {
      fetch(`${serverUrl}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentProduct),
      })
        .then((res) => res.json())
        .then((addedProduct) => {
          setProducts([...products, addedProduct]);
          closeModal();
        });
    }
  };

  const handleDeleteProduct = (id) => {
    fetch(`${serverUrl}/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts(products.filter((product) => product.ID !== id));
    });
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setCurrentProduct({
      ID: "",
      Categories: "",
      Name: "",
      Description: "",
      "Image Link": "",
      "Regular Price": "",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct({
      ID: "",
      Categories: "",
      Name: "",
      Description: "",
      "Image Link": "",
      "Regular Price": "",
    });
  };

  return (
    <div className="admin-page">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <button
        onClick={openAddModal}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Add New Product
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.ID}>
                <td className="border px-4 py-2">{product.ID}</td>
                <td className="border px-4 py-2">{product.Name}</td>
                <td className="border px-4 py-2">{product.Categories}</td>
                <td className="border px-4 py-2">{product.Description}</td>
                <td className="border px-4 py-2">
                  KSh {product["Regular Price"].toLocaleString()}
                </td>
                <td className="border px-4 py-2 flex space-x-4">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.ID)}
                    className="bg-red-500 text-white py-1 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleAddProduct}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="Name"
              value={currentProduct.Name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="Categories"
              value={currentProduct.Categories}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="Description"
              value={currentProduct.Description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image Link</label>
            <input
              type="text"
              name="Image Link"
              value={currentProduct["Image Link"]}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="Regular Price"
              value={currentProduct["Regular Price"]}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {isEditing ? "Update Product" : "Add Product"}
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AdminPage;