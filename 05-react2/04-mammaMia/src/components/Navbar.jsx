import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mamma-mia-logo.png"
import { PizzaContext } from "../PizzaContext";


const Navbar = () => {
  const {count} = useContext(PizzaContext)
  const {total} = useContext(PizzaContext)

  return (
    <div className="navbar">
      <Link className="navbar-brand" to="/">
        <img src={logo}></img>
      </Link>
      <Link className="shopping-cart" to="/carrito">
      🛒 <span className={count ? "counter-show" : ""}>{count}</span> <span>{total}</span>
      </Link>
    </div>
  );
};

export default Navbar;
