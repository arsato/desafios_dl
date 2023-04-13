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
    <div className="card bg-light gallery-card">
      <img className="gallery-card-img-top" src={image} />
      <div className="card-body">
        <div className="gallery-card-body-info">
          <div className="gallery-card-body-left">
            <h5 className="gallery-card-title">{betterName(name)}</h5>
            <div className="gallery-card-data">
              <button onClick={() => minusQty(id)}>-</button>
              <p>{qty}</p>
              <button onClick={() => addQty(id)}>+</button>
            </div>
          </div>
          <div className="card-body-right">
            <p className="gallery-price">{priceFormat.format(price)}</p>
            <p className="gallery-price">Total:{priceFormat.format(price*qty)}</p>
            <div className="buttons">
              <button className="btn btn-danger add-pizza" onClick={() => deleteItem(id)}>Eliminar 🗑️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
