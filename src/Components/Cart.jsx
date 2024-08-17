import React from "react";
import { useCart } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <Navbar />
      <SecondNavbar />
      <div className="cart-container mx-20 my-10">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.ID}>
                  <td className="border px-4 py-2">
                    <img
                      src={item["Image Link"]}
                      alt={item.Name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.Name}</td>
                  <td className="border px-4 py-2">
                    KSh {item["Regular Price"].toLocaleString()}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => removeFromCart(item.ID)}
                      className="text-doroscolor hover:text-amber-800"
                    >
                      <AiFillDelete size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Cart;
