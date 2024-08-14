import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <p>
        <Link to="/">Home</Link>{" "}
      </p>
    </nav>
  );
}

export default Navbar;
