import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../PizzaContext";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, carrito, setCarrito, count, setCount, total, setTotal } =
    useContext(PizzaContext);

  const result = pizzas.find((item) => item.id === id);
  const resultCarrito = carrito.find((item) => item.id === id);

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
        return { ...item, qty: resultCarrito.qty + 1 };
      }
      return item;
    });
    setCarrito(updateCarrito);
    setTotal(total + result.price);
    setCount(count + 1);
  };

  return (
    <div className="store">
      <div className="pizza-detail">
        {result ? (
          <div className="card bg-light pizza-card">
            <img className="pizza-img" src={result.img}></img>
            <div className="card-body">
              <h5 className="card-title">{betterName(result.name)}</h5>
              <hr />
              <div className="card-data">
                <div className="card-text description">{result.desc}</div>
                <div className="card-text ingredients">
                  <h6>Ingredientes: </h6>
                  {result.ingredients.map((ingrediente) => (
                    <p key={result.name + ingrediente}>
                      🍕 {betterName(ingrediente)}
                    </p>
                  ))}
                </div>
                <h3 className="price">{priceFormat.format(result.price)}</h3>
                <div className="overlay" />
                <div className="buttons">
                  <button className="btn btn-danger" onClick={() => addQty(result.id)}>Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "Cargando"
        )}
      </div>
    </div>
  );
};

export default Pizza;
