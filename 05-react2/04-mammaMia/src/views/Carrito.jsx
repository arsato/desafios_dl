import React, { useContext } from "react";
import { PizzaContext } from "../PizzaContext";
import CartCard from "../components/CartCard";

const Carrito = () => {
  const { count, total, carrito } = useContext(PizzaContext);

  const priceFormat = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <div className="store">
      <div className="cart-title">MI PEDIDO:</div>
      <div className="cart-detail">
        {count != 0 ? (
          carrito
            .filter((value) => {
              if (value.qty > 0) {
                return true;
              }
              return false;
            })
            .map((value) => (
              <CartCard
                key={value.id + "A"}
                image={value.img}
                name={value.name}
                price={value.price}
                id={value.id}
                qty={value.qty}
              />
            ))
        ) : (
          <div className="card bg-light cart-empty">
            <p>No hay pizzas en tu carro</p>
          </div>
        )}
        <div className={count != 0 ? "calculo-total" : "hide"}>
          <div className="card bg-light pay-card">
            <div className="pizza-qty">
              <p className="total-qty">
                🍕
                <span className={count != 0 ? "counter show popout" : "hide"}>
                  {count}
                </span>
              </p>
            </div>
            <div className="cart-total-price">
              <p className="total-price">Total: {priceFormat.format(total)}</p>
            </div>
            <div className="cart-total-button">
              <button className="btn btn-danger pay-btn">
                Realizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
