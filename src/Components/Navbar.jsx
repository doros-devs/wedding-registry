import React from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/authContext";
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
  const { logOut } = userAuth();

  return (
    <nav className="bg-black text-white">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src="/images/doros white logo.png"
            alt="doros-logo"
            className="w-16 ml-20"
          />
        </Link>

        <div className="flex items-center">
          <button onClick={() => logOut()} className=" pr-20 font-bold ">
            LOG OUT
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
