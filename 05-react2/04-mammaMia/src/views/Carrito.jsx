import React, { useContext } from "react";
import { PizzaContext } from "../PizzaContext";
import CartCard from "../components/CartCard";

const Carrito = () => {
  const { carrito, setCarrito } = useContext(PizzaContext);

  return (
    <div>
      <div className="carrito-titulo">Detalles del pedido:</div>
      <div className="carrito-detalles">
          {carrito
            .filter((value) => {
              if (value.qty > 0) {
                return true;
              }
              return false;
            })
            .map((value) => (
              <CartCard key={value.id+"A"} image={value.img} name={value.name} price={value.price} id={value.id} qty={value.qty} />
            ))}
      </div>
    </div>
  );
};

export default Carrito;
