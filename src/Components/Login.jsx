import React, {useState} from "react";
import { Link, useNavigate,} from "react-router-dom";
import Navbar from "./Navbar";
import { userAuth } from "../context/authContext";

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
    } catch {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>This is the Login page</h1>
      <form>
        <input
          type="text"
          name="email"
          placeholder="type your email"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="type your password"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <br />
        <span>
          Dont have an account <Link to="/signup">signup</Link>
        </span>
      </form>
    </>
  );
}

export default Login;
