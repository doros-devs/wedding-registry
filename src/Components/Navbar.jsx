import React from "react";
import { Link, Navigate } from "react-router-dom";
import { userAuth } from "../context/authContext";

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
          <button className=" mr-20 font-bold ">
            <Link to="/login">LOG IN</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
