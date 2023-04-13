import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mamma-mia-logo.png"
import { PizzaContext } from "../PizzaContext";


const Navbar = () => {
  const {count} = useContext(PizzaContext)

  return (
    <div className="navbar sticky-top">
      <Link className="navbar-brand" to="/">
        <img src={logo}></img>
      </Link>
      <Link className="shopping-cart" to="/carrito">
      🛒 <span className={count != 0 ? "counter show popout" : "counter hide"}>{count}</span>
      </Link>
    </div>
  );
};

export default Navbar;
