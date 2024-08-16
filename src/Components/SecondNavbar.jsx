import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../context/CartContext";

function SecondNavbar() {
  const { cartItems } = useCart();

  return (
    <>
      <div className="flex justify-between items-center border-b py-4">
        <div className="flex justify-center items-center flex-1 space-x-8">
          <p className="text-lg font-semibold text-gray-700 hover:text-gray-500">
            <Link to="/">Shop</Link>
          </p>
          <p className="text-lg font-semibold text-gray-700 hover:text-gray-500">
            <Link to="/Myregistry">My Registry</Link>
          </p>
        </div>
        <div className="flex items-center pr-20 text-lg">
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
