import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../context/CartContext";

function SecondNavbar() {
  const { cartItems } = useCart();
  const location = useLocation();

  return (
    <>
      <div className="flex items-center justify-between border-b mt-4 px-4">
        <div className="flex space-x-8 ml-16">
          <p
            className={`text-lg font-semibold text-gray-700 hover:text-gray-500 ${
              location.pathname === "/" ? "border-b-4 border-doroscolor" : ""
            }`}
          >
            <Link to="/">Shop</Link>
          </p>
          <p
            className={`text-lg font-semibold text-gray-700 hover:text-gray-500 ${
              location.pathname === "/Myregistry"
                ? "border-b-4 border-doroscolor"
                : ""
            }`}
          >
            <Link to="/Myregistry">My Registry</Link>
          </p>
        </div>
        <div className="flex items-center text-lg mr-16 space-x-2">
          <TiShoppingCart className="text-2xl text-gray-700" />
          <Link
            to="/Cart"
            className="text-lg font-semibold text-gray-700 hover:text-gray-500"
          >
            ({cartItems.length})
          </Link>
        </div>
      </div>
    </>
  );
}

export default SecondNavbar;
