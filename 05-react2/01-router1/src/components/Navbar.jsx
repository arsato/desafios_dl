import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-dark text-light d-flex justify-content-between align-items-center">
      <h1>Series</h1>
      <div className="places">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="contact">Contacto</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
