import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Cart from "./Components/Cart";
import Myregistry from "./Components/Myregistry";
import CategoryPage from "./Components/CategoryPage";
import ProductDetailPage from "./Components/ProductDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="Myregistry" element={<Myregistry />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        
      </Routes>
    </>
  );
}

export default App;
