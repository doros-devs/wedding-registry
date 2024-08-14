import React, { useContext } from "react";
import Navbar from "./Navbar";
import { userAuth } from "../context/authContext";

function Home() {


  return (
    <>
      <Navbar />
      <h1>This is the Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in
        exercitationem quasi iste, quidem assumenda quaerat atque enim tenetur,
        officia consequatur ducimus aperiam minus error recusandae blanditiis,
        et eos laborum.
      </p>
    </>
  );
}

export default Home;
