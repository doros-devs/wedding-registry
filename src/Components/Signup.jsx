import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Signup() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  } 

  return (
    <>
      <Navbar />
      <h1>This is the Signup page</h1>
      <form > 
        <input
          type="text"
          name="email"
          placeholder="type your email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="type your passowrd"
          onChange={handleChange}
        />
        <br />
        <button className="border-black border-solid" type="submit" onClick={handleSubmit} >
          Signup
        </button>
        <br />
        <span>
          Have an account <Link to="/login">login</Link>
        </span>
      </form>
    </>
  );
}

export default Signup;
