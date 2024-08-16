import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { userAuth } from "../context/authContext";
import SecondNavbar from "./SecondNavbar";

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
      <SecondNavbar />
      <div className="flex justify-center items-center min-h-screen mx-40">
        <div className="bg-white p-8 rounded-lg shadow-lg flex">
          <div className="w-1/2 flex items-center justify-center p-4">
            <img
              src="/images/imagefor login.jpg"
              alt="image of flowers"
              className="w-90 h-auto rounded-lg"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-center">
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
                Signup
              </button>
              <div className="text-center">
                <span>
                  Have an account?{" "}
                  <Link to="/login" className="text-blue-500 hover:underline">
                    Login
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

export default Signup;
