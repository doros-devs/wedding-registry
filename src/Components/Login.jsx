import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { userAuth } from "../context/authContext";
import SecondNavbar from "./SecondNavbar";

function Login() {
  const [formData, setFormData] = useState({});
  const { login } = userAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl lg:max-w-4xl flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0">
            <img
              src="/images/imagefor login.jpg"
              alt="image of flowers"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center ml-4">
            <form className="space-y-4">
              <input
                type="text"
                name="email"
                placeholder="Type your email"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
              <div className="text-center">
                <span>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-500 hover:underline">
                    Sign up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;