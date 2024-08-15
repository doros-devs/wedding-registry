import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8002/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) =>
            product.Categories.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filteredProducts);
      });
  }, [categoryName]);

  return (
    <div>
      <Navbar />
      <SecondNavbar />
      <div className="container mx-auto">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="my-8 hover:t-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &larr;
          </button>
          <h1 className="text-2xl font-bold my-8 text-center">
            {categoryName}
          </h1>
        </div>

        <ProductDetails products={products} />
      </div>
    </div>
  );
}

export default CategoryPage;
