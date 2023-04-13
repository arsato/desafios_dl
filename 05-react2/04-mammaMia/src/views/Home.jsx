import React, { useContext } from "react";
import PizzaCard from "../components/PizzaCard";
import { PizzaContext } from "../PizzaContext";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="store">
      <div className="hero">
      <img src="https://c0.wallpaperflare.com/path/839/412/980/food-and-drink-pizza-pizzas-tomato-883f641d5ec9bfaf3d8f5382de17d2eb.jpg"></img>
      <div className="hero-text">
        <h1>Mamma Mia Pizzeria</h1>
      </div>
      </div>
      <div className="pizza-gallery">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id + "A"}
            image={pizza.img}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            id={pizza.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
