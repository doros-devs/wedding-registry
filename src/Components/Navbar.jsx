import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/authContext";

function Navbar() {
  const { user, logOut } = userAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

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
          {user ? (
            <button onClick={handleLogout} className="mr-20 font-bold">
              LOG OUT
            </button>
          ) : (
            <Link to="/login">
              <button className="mr-20 font-bold">LOG IN</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
