import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mamma-mia-logo.png";
import { PizzaContext } from "../PizzaContext";

const Navbar = () => {
  const { count } = useContext(PizzaContext);

  return (
    <div className="navbar sticky-top">
      <div className="navbar-inner">
        <Link className="navbar-brand" to="/">
          <img src={logo}></img>
        </Link>
        <div className="navbar-icon">
          <span>🏛️</span>
          <p>Locales</p>
        </div>
        <div className="navbar-icon">
          <span>🛵</span>
          <p>Pedidos</p>
        </div>
        <div className="navbar-icon">
          <span>✉️</span>
          <p>Contacto</p>
        </div>
        <Link className="shopping-cart" to="/carrito">
          🛒{" "}
          <span className={count != 0 ? "counter show popout" : "counter hide"}>
            {count}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
