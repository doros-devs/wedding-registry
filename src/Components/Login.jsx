import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <h1>This is the Login page</h1>
      <form>
        <input type="text" name="email" placeholder="type your email" /> <br />
        <input type="password" name="password" placeholder="type your password" />
        <br />
        <button type="submit">Login</button>
        <br />
        <span>
          Dont have an account <Link to="/signup">signup</Link>
        </span>
      </form>
    </>
  );
}

export default Login;
