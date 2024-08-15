import React from "react";


function CategoryList({ categories, setSelectedCategory }) {


  return (
    <div className="category-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-20 place-content-center">
      {categories.map((category) => (
        <div
          key={category}
          className="category-card border rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setSelectedCategory(category)}
        >
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{category}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
