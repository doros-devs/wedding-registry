import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../context/CartContext";

function SecondNavbar() {
  const { cartItems } = useCart();
  const location = useLocation();

  return (
    <>
      <div className="flex items-center border-b mt-4">
        <div className="flex space-x-8 justify-center ml-[600px] mb-2">
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
        <div className="flex items-center text-lg ml-auto pr-20">
          <p className="text-lg font-semibold text-gray-700 hover:text-gray-500 pr-2">
            <Link to="/Cart">Cart ({cartItems.length})</Link>
          </p>
          <TiShoppingCart className="text-2xl text-gray-700" />
        </div>
      </div>
    </>
  );
}

export default SecondNavbar;
