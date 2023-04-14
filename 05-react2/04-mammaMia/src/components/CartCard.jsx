import React, { useContext } from "react";
import { PizzaContext } from "../PizzaContext";

const CartCard = ({ image, name, price, id, qty }) => {
  const { carrito, setCarrito, count, setCount, total, setTotal } =
    useContext(PizzaContext);

  const betterName = (data) => {
    const words = data.split(" ");
    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  };

  const priceFormat = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  const addQty = (ele) => {
    let updateCarrito = carrito.map((item) => {
      if (item.id == ele) {
        return { ...item, qty: qty + 1 };
      }
      return item;
    });
    setCarrito(updateCarrito);
    setTotal(total + price);
    setCount(count + 1);
  };

  const minusQty = (ele) => {
    let updateCarrito = carrito.map((item) => {
      if (item.id == ele) {
        return { ...item, qty: qty - 1 };
      }
      return item;
    });
    setCarrito(updateCarrito);
    setTotal(total - price);
    setCount(count - 1);
  };

  const deleteItem = (ele) => {
    let updateCarrito = carrito.map((item) => {
      if (item.id == ele) {
        return { ...item, qty: 0 };
      }
      return item;
    });
    setCarrito(updateCarrito);
    setTotal(total - price * qty);
    setCount(count - qty);
  };

  return (
    <div className="card bg-light cart-card">
      <img className="pizza-cart-img" src={image} />
      <h5 className="pizza-title">{betterName(name)}</h5>
      <div className="pizza-qty">
        <button className="qty-minus-button" onClick={() => minusQty(id)}>
          <p>-</p>
        </button>
        <p className="item-qty">{qty}</p>
        <button className="qty-button" onClick={() => addQty(id)}>
          <p>+</p>
        </button>
      </div>
      <div className="cart-price">
        <p className="item-price">{priceFormat.format(price * qty)}</p>
      </div>
      <div className="cart-button">
        <button
          className="btn btn-danger delete-cart-item"
          onClick={() => deleteItem(id)}
          title="Eliminar"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartCard;
