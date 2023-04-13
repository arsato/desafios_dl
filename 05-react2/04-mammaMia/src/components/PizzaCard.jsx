import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../PizzaContext";

const PizzaCard = ({ image, name, ingredients, price, id }) => {
  const navigate = useNavigate();
  const { carrito, setCarrito, count, setCount, total, setTotal } =
  useContext(PizzaContext);
  const result = carrito.find((item) => item.id === id);

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

  const detallePizza = (e) => {
    e.preventDefault();
    navigate(`/pizza/${id}`);
  };

  const addQty = (ele) => {
    let updateCarrito = carrito.map(item => 
      {
        if (item.id == ele){
          return {...item, qty: result.qty+1}
        }
        return item
      });
    setCarrito(updateCarrito)
    setCount(count + 1)
    setTotal(total + price)
  }

  return (
    <div className="card bg-light gallery-card">
      <img className="gallery-card-img-top" src={image} onClick={detallePizza} />
      <div className="card-body">
        <div className="gallery-card-body-info">
          <div className="gallery-card-body-left">
            <h5 className="gallery-card-title" onClick={detallePizza}>
              {betterName(name)}
            </h5>
            <div className="gallery-card-data" onClick={detallePizza}>
              <div className="card-text ingredients">
                <p>
                  {ingredients
                    .map(
                      (ingrediente) =>
                        ingrediente[0].toUpperCase() + ingrediente.substring(1)
                    )
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div className="card-body-right">
            <p className="gallery-price">{priceFormat.format(price)}</p>
            <div className="buttons">
              <button className="btn btn-danger add-pizza" onClick={() => addQty(id)}>Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
