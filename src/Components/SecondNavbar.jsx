import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function SecondNavbar() {
  return (
    <>
      <div className="flex justify-between items-center border-b">
        <div className="flex justify-center items-center flex-1">
          <p className="px-4 pb-2 pt-4 text-lg">
            <Link to="/">Shop</Link>
          </p>
          <p className="px-4 pb-2 pt-4 text-lg">
            <Link to="/Myregistry">My registry</Link>
          </p>
        </div>
        <div className="flex items-center pr-20 pb-2 pt-6 text-lg">
          <p className="pr-2">
            <Link to="/Cart">Cart </Link>
          </p>
          <TiShoppingCart />
        </div>
      </div>
    </>
  );
}

export default SecondNavbar;
