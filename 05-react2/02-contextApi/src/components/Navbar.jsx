import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-dark text-light d-flex justify-content-center align-items-center">
      <div className="places">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="favourites">Favoritas</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;