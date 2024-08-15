import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";
import CategoryList from "./CategoryList";
import ProductDetails from "./ProductDetails";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8002/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        const uniqueCategories = [
          ...new Set(data.map((product) => product.Categories)),
        ];
        const upperCasecategory = uniqueCategories.map(
          (str) => str.charAt(0).toUpperCase() + str.slice(1)
        );
        setCategories(upperCasecategory);
        console.log(uniqueCategories);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.Categories === selectedCategory
  );

  return (
    <>
      <Navbar />
      <SecondNavbar />
      <div>
        <CategoryList
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductDetails products={filteredProducts} />
      </div>
    </>
  );
}

export default Home;
