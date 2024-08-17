import React from "react";
import { Link } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    <div className="category-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 mx-20 place-content-center">
      {categories.map((category) => (
        <Link to={`/category/${category.name}`} key={category.ID}>
          <div className="category-card cursor-pointer mt-4">
            <img
              src={category["Image Link"]}
              alt={category.name}
              className="w-96 h-48 object-cover rounded-lg mx-auto"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
