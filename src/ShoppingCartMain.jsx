import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShoppingScreen } from "./screen/ShoppingScreen";
import { CartScreen } from "./screen/CartScreen";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";

export const ShoppingCart = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div className="container">
          {" "}
          <Routes>
            <Route path="/" element={<ShoppingScreen></ShoppingScreen>}></Route>
            <Route path="/carrito" element={<CartScreen></CartScreen>}></Route>
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
};
