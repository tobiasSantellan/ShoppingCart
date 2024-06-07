import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartScreen = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CartContext);
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <th>{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <th>
            <b>TOTAL: </b>
          </th>
          <td></td>
          <td></td>
          <td>${calcularTotal()}</td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={handleImpresion}
          disabled={listaCompras < 1}
        >
          BUY
        </button>
      </div>
    </>
  );
};
