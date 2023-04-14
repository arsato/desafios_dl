import React, { useContext } from "react";
import PizzaCard from "../components/PizzaCard";
import { PizzaContext } from "../PizzaContext";
import logo from "../assets/mamma-mia-logo.png"

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="store">
      <div className="hero">
        <img className="hero-bg" src="https://c0.wallpaperflare.com/path/839/412/980/food-and-drink-pizza-pizzas-tomato-883f641d5ec9bfaf3d8f5382de17d2eb.jpg"/>
        <img className="hero-logo" src={logo}/>
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
