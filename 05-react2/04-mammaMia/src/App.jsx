import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import { PizzaContext } from "./PizzaContext";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const getPizzas = async () => {
    const response = await fetch("../src/data/pizzas.json");
    let pizzaData = await response.json();
    setPizzas(pizzaData);
    let carritoData = pizzaData.map((element) => ({
      id: element.id,
      name: element.name,
      img: element.img,
      price: element.price,
      qty: 0,
    }));
    setCarrito(carritoData);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <PizzaContext.Provider
          value={{
            pizzas,
            setPizzas,
            carrito,
            setCarrito,
            count,
            setCount,
            total,
            setTotal,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </PizzaContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
