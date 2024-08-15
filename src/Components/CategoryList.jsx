import React from "react";
import { Link } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    <div className="category-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-20 place-content-center">
      {categories.map((category) => (
        <Link to={`/category/${category}`} key={category}>
          <div className="category-card border rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
