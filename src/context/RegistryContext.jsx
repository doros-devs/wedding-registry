import React, { createContext, useState } from "react";

export const RegistryContext = createContext();

export function RegistryProvider({ children }) {
  const [registryItems, setRegistryItems] = useState([]);

  const addToRegistry = (product) => {
    setRegistryItems((prevItems) => {
      if (!prevItems.find((item) => item.ID === product.ID)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromRegistry = (productId) => {
    setRegistryItems((prevItems) =>
      prevItems.filter((item) => item.ID !== productId)
    );
  };

  return (
    <RegistryContext.Provider
      value={{ registryItems, addToRegistry, removeFromRegistry }}
    >
      {children}
    </RegistryContext.Provider>
  );
}
