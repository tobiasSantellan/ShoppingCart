import { useEffect, useState } from "react";
// import { ProductsContext } from "./ProductosContext";
import { ProductsContext } from "../context/ProductsContext";
/* eslint-disable react/prop-types */

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
