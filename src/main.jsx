import React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
import { ShoppingCart } from "./ShoppingCartMain.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingCart />
    </React.StrictMode>
  </BrowserRouter>
);
