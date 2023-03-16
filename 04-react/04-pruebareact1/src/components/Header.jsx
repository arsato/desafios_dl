import React from "react"

const Header = ({valorBuscado}) => {
    return (
        <div className="navbar bg-dark text-light d-flex justify-content-between align-items-center">
        <h1>Series mejor valoradas</h1>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"></img>
        <input
          className="buscador"
          name="busqueda"
          type="text"
          placeholder="Busca por nombre, año o palabra"
          onChange={(e) => valorBuscado(e.target.value)}
        />
      </div>
    )
}

export default Header