import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import { RegistryProvider } from "./context/RegistryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthContextProvider>
        <RegistryProvider>
          <App />
        </RegistryProvider>
      </AuthContextProvider>
    </Router>
  </StrictMode>
);
