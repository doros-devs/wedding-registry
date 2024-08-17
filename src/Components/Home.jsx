import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";
import CategoryList from "./CategoryList";
import ProductDetails from "./ProductDetails";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const serverUrl = import.meta.env.VITE_DB_JSON_SERVER;

  useEffect(() => {
    fetch(`${serverUrl}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

    fetch(`${serverUrl}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <SecondNavbar />
      <div>
        <CategoryList
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </>
  );
}

export default Home;
