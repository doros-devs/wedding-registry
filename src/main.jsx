import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import { RegistryProvider } from "./context/RegistryContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthContextProvider>
        <RegistryProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </RegistryProvider>
      </AuthContextProvider>
    </Router>
  </StrictMode>
);
