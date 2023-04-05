import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <div className="navbar bg-dark text-light d-flex">
      <div className="navbar-brand">
        <img className="logo" src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" />
      </div>
      <div className="places">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/pokemons">
          Pokemons
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
