import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

export const ShoppingScreen = () => {
  const { products } = useContext(ProductsContext);

  const { agregarCompra, eliminarCompra } = useContext(CartContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1>Shopping</h1>
      <hr />
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handleAgregar={() => handleAgregar(product)}
          handleQuitar={() => handleQuitar(product.id)}
        ></Card>
      ))}
    </>
  );
};
