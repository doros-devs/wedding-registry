import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { userAuth } from "../context/authContext";

function Signup() {
  const [formData, setFormData] = useState({});
  const { signUp } = userAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>This is the Signup page</h1>
      <form>
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
          placeholder="type your password"
          onChange={handleChange}
        />
        <br />
        <button
          className="border-black border-solid"
          type="submit"
          onClick={handleSubmit}
        >
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
