import React, { useContext } from "react";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";
import { RegistryContext } from "../context/RegistryContext";
import ProductCard from "./ProductCard";

function MyRegistry() {
  const { registryItems, removeFromRegistry } = useContext(RegistryContext);

  return (
    <div>
      <Navbar />
      <SecondNavbar />
      <div className="my-registry-container mx-20 my-10">
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {registryItems.length === 0 ? (
            <p className="text-center col-span-full">Your registry is empty.</p>
          ) : (
            registryItems.map((product) => (
              <div key={product.ID}>
                <ProductCard product={product} />
                <button
                  onClick={() => removeFromRegistry(product.ID)}
                  className="mt-2 bg-red-500 text-white py-1 px-4 rounded"
                >
                  Remove from Registry
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MyRegistry;
