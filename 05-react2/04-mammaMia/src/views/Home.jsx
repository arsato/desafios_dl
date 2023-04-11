import React, { useEffect, useState } from "react";
import PizzaCard from "../components/PizzaCard";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("./pizzas.json");
      let pizzaData = await response.json();
      setPizzas(pizzaData);
    } catch {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="store">
    <div className="pizza-gallery">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} image={pizza.img} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} />
      ))}
    </div>
    </div>
  );
};

export default Home;
