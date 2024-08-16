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
    fetch(`${serverUrl}/products`)
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
